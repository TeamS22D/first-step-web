import Search from "../../components/Missions/components/Searchbar";
import Status from "./components/Status";
import * as S from "./styles/Missions.style"
import { useCallback, useEffect, useState } from "react";
import Category from "../../components/Missions/components/Category";
import MissionList from "@/components/Missions/components/MissionList";
import { useParams } from "react-router";
import axiosInstance from "@/hooks/axiosInstance";
const SERVER_URL = import.meta.env.VITE_BASE_URL
import { CategoryList } from "@/constants/MissionFilter.constants";

interface IMissions {
  userMissionId: number,
  missionName: string,
  missionTheme: "email" | "chat" | "document",
  startDate: string,
  endDate: string
}

function Missions() {
  const [keyword, setKeyword] = useState('');
  const { category } = useParams<{ category: string }>();
  const [missions, setMissions] = useState<IMissions[]>([]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
  }, [])

  useEffect(() => {
    axiosInstance.get(`${SERVER_URL}/user-mission/missions`)
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("미션이 없습니다.");
        } else {
          alert("미션을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
      })
  }, [category])

  

  useEffect(() => {
    if (keyword !== "") {
      const filteredMissions = missions.filter((elem) => {
        const newKeyword = keyword.toLowerCase().replace(/ /g, "");
        if (elem.missionName.replace(/ /g, "").toLowerCase().includes(newKeyword)) {
          return true;
        }
        return false;
      });
      setMissions(filteredMissions);
    } else {
      setMissions(missions);
    }
  }, [keyword, missions]);

  return (
    <S.Container>
      <Status />
      <Search onChange={onChange} keyword={keyword} />
      <Category categoryList={CategoryList} />
      <MissionList category={category || "all"} missions={missions} />
    </S.Container>
  )
}

export default Missions;