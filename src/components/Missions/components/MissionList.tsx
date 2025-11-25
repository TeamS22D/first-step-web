import { useEffect } from "react";
import * as S from "../styles/MissionList.style"
import Timer from "@assets/Home/Timer.png"
import axios from "axios";

const Mission = () => {
  return (
    <S.MissionBox>
      <S.Mission>
        <S.StatusBadge>{"NEW"}</S.StatusBadge>
        <S.MissionTitle>{"Mission Title"}</S.MissionTitle>
        <S.Deadline><img src={Timer} />{"2025-04-01"}</S.Deadline>
        <S.Buttons>
          <S.Button>시작하기</S.Button>
        </S.Buttons>
      </S.Mission>
    </S.MissionBox>
  )
}

function MissionList({category}: {category: string;}) {

  useEffect(() => {
    axios.get(`fetching${category}`)
    .then((response) => {
      console.log(response.data);
    })
  })

  return (
    <S.Container>
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
      <Mission />
    </S.Container>
  )
}

export default MissionList;