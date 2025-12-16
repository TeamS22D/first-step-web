import Search from "@/components/Missions/components/Searchbar";
import * as S from "./Feedback.style"
import Category from "@/components/Missions/components/Category";
import { useCallback, useEffect, useState } from "react";
import MissionList from "@/components/Missions/components/MissionList";
import { useParams } from "react-router-dom";
import axiosInstance from "@/hooks/axiosInstance";
import FeedbackCategory from "@constants/FeedbackCategory.constants"
const SERVER_URL = import.meta.env.VITE_BASE_URL;

interface IMissions {
  userMissionId: number,
  missionName: string,
  missionTheme: "email" | "chat" | "document",
  startDate: string,
  endDate: string
}

function Feedback() {
  const [keyword, setKeyword] = useState('');
  const { category } = useParams<{ category: string }>();
  const [missions, setMissions] = useState<IMissions[]>([]);
  
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
  }, [])

  useEffect(() => {
    axiosInstance.get(`${SERVER_URL}/user-mission/missions/feedback`, 
      {
        params: {
          missionTheme: category
        }
      }
    )
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
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
      <Search onChange={onChange} keyword={keyword} />
      <Category categoryList={FeedbackCategory} />
      <MissionList category={category || "all"} missions={missions} />
    </S.Container>
  )
}

export default Feedback;