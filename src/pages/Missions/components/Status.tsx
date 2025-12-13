import { useEffect, useState } from "react"
import * as S from "../styles/Status.style"
import axiosInstance from "@/hooks/axiosInstance"
const SERVER_URL = import.meta.env.VITE_BASE_URL

interface IStatus {
  mission: {
    completed: number,
    total: number,
    remaining: number,
    rate: number,
  },
  document: {
    completed: number,
    total: number,
    rate: number
  },
  email: {
    completed: number,
    total: number,
    rate: number
  },
  chat: {
    completed: number,
    total: number,
    rate: number
  },
}

function Status() {
  const [data, setData] = useState<IStatus>();
  useEffect(() => {
    axiosInstance.get(`${SERVER_URL}/user-mission`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      alert(error);
    })
  }, [])

  return (
    <S.Status>
      <S.StatusBar>
        <S.TextContainer>
          <S.CountOfMission>{data?.mission.completed}</S.CountOfMission>
          <S.CountSuffix>개</S.CountSuffix>
          <S.RestMission>남은 개수 {data?.mission.remaining}개</S.RestMission>
        </S.TextContainer>
        <S.BarEmpty>
          <S.BarFilled size={String(data?.mission.rate) || "0"} />
        </S.BarEmpty>
      </S.StatusBar>
        <S.Stat>
          <S.StatRow>
            <S.Box>
              문서
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                {data?.document.completed}
              </S.StatHighlight>
               / {data?.document.total}
            </S.StatText>
          </S.StatRow>
          <S.StatRow>
            <S.Box>
              채팅
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                {data?.chat.completed}
              </S.StatHighlight>
               / {data?.chat.total}
            </S.StatText>
          </S.StatRow>
          <S.StatRow>
            <S.Box>
              메일
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                {data?.email.completed}
              </S.StatHighlight>
               / {data?.email.total}
            </S.StatText>
          </S.StatRow>
        </S.Stat>
    </S.Status>
  )
}

export default Status