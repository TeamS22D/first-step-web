import { useState, useEffect } from "react";
import * as S from "./Profile.style";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import axiosInstance from "../../axioslnstance";

import attendanceImg from "/assets/Profile/attendance.png";
import percentImg from "/assets/Profile/percent.png";

const USE_MOCK = true; 

const ATTENDANCE_ENDPOINT = "/user/attendance";
const GRAPH_ENDPOINT = "/profile/graph";
const PERCENT_ENDPOINT = "/profile/percent";

type HistoryPoint = {
  index: string;  
  document: number;
  chat: number;
  mail: number;
};

type HistoryResponse = {
  range: string;
  history: HistoryPoint[];
};

type PercentResponse = {
  percent: number;
};

type AttendanceResponse = {
  message: string;
  streak: number;
};

const MOCK_HISTORY_MONTH: HistoryPoint[] = [
  { index: "0일", document: 100, chat: 55, mail: 27 },
  { index: "5일", document: 100, chat: 55, mail: 27 },
  { index: "10일", document: 90, chat: 45, mail: 35 },
  { index: "15일", document: 73, chat: 61, mail: 27 },
  { index: "20일", document: 85, chat: 45, mail: 30 },
  { index: "25일", document: 95, chat: 52, mail: 37 },
  { index: "30일", document: 98, chat: 58, mail: 30 },
];

const MOCK_HISTORY_YEAR: HistoryPoint[] = [
  { index: "2월", document: 65, chat: 40, mail: 30 },
  { index: "4월", document: 70, chat: 45, mail: 35 },
  { index: "6월", document: 75, chat: 50, mail: 40 },
  { index: "8월", document: 80, chat: 55, mail: 45 },
  { index: "10월", document: 85, chat: 60, mail: 50 },
  { index: "12월", document: 90, chat: 65, mail: 55 },
];

const MOCK_HISTORY_WEEK: HistoryPoint[] = [
  { index: "월", document: 60, chat: 30, mail: 20 },
  { index: "화", document: 65, chat: 35, mail: 25 },
  { index: "수", document: 70, chat: 40, mail: 30 },
  { index: "목", document: 75, chat: 45, mail: 35 },
  { index: "금", document: 80, chat: 50, mail: 40 },
  { index: "토", document: 85, chat: 55, mail: 45 },
  { index: "일", document: 90, chat: 60, mail: 50 },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최근 한 달간");
  const [activeTab, setActiveTab] = useState("전체");

  const [clickedData, setClickedData] = useState<HistoryPoint | null>(null);

  const [historyData, setHistoryData] = useState<HistoryPoint[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const [percent, setPercent] = useState<number | null>(null);

  const [streak, setStreak] = useState<number | null>(null);
  const [loadingAttendance, setLoadingAttendance] = useState(false);

  const options = ["최근 한 달간", "최근 일 년간", "최근 일주일간"];

  const handleSelect = (v: string) => {
    setSelected(v);
    setOpen(false);
  };

  useEffect(() => {
    const checkAttendance = async () => {
      if (USE_MOCK) {
        setStreak(3);
        return;
      }

      setLoadingAttendance(true);
      try {
        const res = await axiosInstance.post<AttendanceResponse>(
          ATTENDANCE_ENDPOINT
        );
        if (typeof res.data.streak === "number") {
          setStreak(res.data.streak);
        } else {
          setStreak(null);
          console.warn("attendance 응답에 streak 필드가 없습니다:", res.data);
        }
      } catch (err: any) {
        console.error("출석체크 오류:", err?.response?.data ?? err);
        setStreak(null);
      } finally {
        setLoadingAttendance(false);
      }
    };

    checkAttendance();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      if (USE_MOCK) {
        let mock: HistoryPoint[];
        if (selected === "최근 일 년간") mock = MOCK_HISTORY_YEAR;
        else if (selected === "최근 일주일간") mock = MOCK_HISTORY_WEEK;
        else mock = MOCK_HISTORY_MONTH;

        setHistoryData(mock);
        setClickedData(null);
        return;
      }

      setLoadingHistory(true);
      try {
        const range =
          selected === "최근 일 년간"
            ? "year"
            : selected === "최근 일주일간"
            ? "week"
            : "month";

        const res = await axiosInstance.get<HistoryResponse>(GRAPH_ENDPOINT, {
          params: { range },
        });

        if (Array.isArray(res.data.history)) {
          setHistoryData(res.data.history);
        } else {
          setHistoryData([]);
          console.warn("graph 응답에 history 배열이 없습니다:", res.data);
        }
        setClickedData(null);
      } catch (err: any) {
        console.error("히스토리 데이터 불러오기 오류:", err?.response?.data ?? err);
        setHistoryData([]);
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchHistory();
  }, [selected]);

  useEffect(() => {
    const fetchPercent = async () => {
      if (USE_MOCK) {
        setPercent(70);
        return;
      }

      try {
        const res = await axiosInstance.get<PercentResponse>(PERCENT_ENDPOINT);
        if (typeof res.data.percent === "number") {
          setPercent(res.data.percent);
        } else {
          setPercent(null);
          console.warn("percent 응답에 percent 필드가 없습니다:", res.data);
        }
      } catch (err: any) {
        console.error("상위 퍼센트 불러오기 오류:", err?.response?.data ?? err);
        setPercent(null);
      }
    };

    fetchPercent();
  }, []);

  const chartData: HistoryPoint[] = historyData;

  const handleLineClick = (e: any) => {
    if (!e || !e.payload) return;
    const p = e.payload as HistoryPoint;

    setClickedData({
      index: p.index,
      document: p.document,
      chat: p.chat,
      mail: p.mail,
    });
  };

  const defaultPoint =
    chartData.length > 0 ? chartData[chartData.length - 1] : null;
  const current = clickedData ?? defaultPoint;

  return (
    <S.Container>
      <S.Content>
        <S.TopProfileCard>
          <S.ProfileLeft>
            <S.Avatar />
            <div>
              <S.Name>김우주 님</S.Name>
              <S.SubInfo>IT직군 · 사원 · 17세</S.SubInfo>
            </div>
          </S.ProfileLeft>
          <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.TopProfileCard>

        <S.TopSection>
          <S.LeftControls>
            <S.FilterRow>
              <S.DropdownWrapper>
                <S.DropdownBox onClick={() => setOpen(!open)}>
                  {selected}
                  <S.Arrow open={open}>▼</S.Arrow>
                </S.DropdownBox>

                {open && (
                  <S.OptionList>
                    {options.map((op) => (
                      <S.Option key={op} onClick={() => handleSelect(op)}>
                        {op}
                      </S.Option>
                    ))}
                  </S.OptionList>
                )}
              </S.DropdownWrapper>
            </S.FilterRow>
          </S.LeftControls>

          <S.SmallCard>
            <img src={attendanceImg} alt="attendance" />
            <div>
              <S.SmallCardTitle>연속 학습일</S.SmallCardTitle>
              <S.ValueRow>
                <S.ValueNumber>
                  {loadingAttendance ? "-" : streak ?? "-"}
                </S.ValueNumber>
                <S.ValueUnit>일</S.ValueUnit>
              </S.ValueRow>
            </div>
          </S.SmallCard>
        </S.TopSection>

        <S.MainSection>
          <div style={{ flex: 1 }}>
            <S.GraphCard>
              <S.CardTitle>기간별 히스토리</S.CardTitle>

              {loadingHistory && <div>히스토리 불러오는 중...</div>}

              {!loadingHistory && chartData.length > 0 && (
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart
                    data={chartData}
                    margin={{ top: 10, left: 0, right: 10, bottom: 0 }}
                  >
                    <CartesianGrid stroke="#eee" vertical={false} />
                    <XAxis
                      dataKey="index"
                      tick={{ fill: "#555", fontSize: 12 }}
                    />
                    <YAxis
                      tick={{ fill: "#555", fontSize: 12 }}
                      domain={[0, 100]}
                    />

                    <Tooltip
                      cursor={false}
                      formatter={(value: any, name: any) => [
                        `${value}점`,
                        name,
                      ]}
                    />

                    <Line
                      dataKey="document"
                      name="문서형"
                      type="monotone"
                      stroke="#0ACF83"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      isAnimationActive={false}
                      onClick={handleLineClick}
                    />
                    <Line
                      dataKey="chat"
                      name="채팅형"
                      type="monotone"
                      stroke="#AF5EFF"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      isAnimationActive={false}
                      onClick={handleLineClick}
                    />
                    <Line
                      dataKey="mail"
                      name="메일형"
                      type="monotone"
                      stroke="#0099FF"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      isAnimationActive={false}
                      onClick={handleLineClick}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}

              {!loadingHistory && chartData.length === 0 && (
                <div>표시할 히스토리 데이터가 없습니다.</div>
              )}
            </S.GraphCard>

            <S.StatsBox>
              <S.StatItem>
                <S.StatPercent $chat>
                  {current ? `${current.chat}점` : "-"}
                </S.StatPercent>
                <S.StatValue>채팅형</S.StatValue>
              </S.StatItem>

              <S.StatItem>
                <S.StatPercent $document>
                  {current ? `${current.document}점` : "-"}
                </S.StatPercent>
                <S.StatValue>문서형</S.StatValue>
              </S.StatItem>

              <S.StatItem>
                <S.StatPercent $mail>
                  {current ? `${current.mail}점` : "-"}
                </S.StatPercent>
                <S.StatValue>메일형</S.StatValue>
              </S.StatItem>
            </S.StatsBox>
          </div>

          <S.SideInfo>
            <S.SmallCard>
              <img src={percentImg} alt="percent" />
              <div>
                <S.SmallCardTitle>상위</S.SmallCardTitle>
                <S.ValueRow>
                  <S.ValueNumber>{percent ?? "-"}</S.ValueNumber>
                  <S.ValueUnit>%</S.ValueUnit>
                </S.ValueRow>
              </div>
            </S.SmallCard>

            <S.LearningBox>
              <S.LearningHeader>학습 효과</S.LearningHeader>
              <S.LearningText>
                점점 맞춤법이 좋아지고 있어요~!{"\n\n"}
                갈수록 점점 내용의 흐름이 좋아지고 있으며 예의와 격식을 갖춘
                내용, 단어로 말하고 있는 듯 합니다!!
              </S.LearningText>

              <S.Divider />

              <S.LearningHeader>개선 정도</S.LearningHeader>
              <S.LearningText>
                점점 맞춤법이 좋아지고 있어요~!{"\n\n"}
                갈수록 점점 내용의 흐름이 좋아지고 있으며 예의와 격식을 갖춘
                내용, 단어로 말하고 있는 듯 합니다!!
              </S.LearningText>
            </S.LearningBox>
          </S.SideInfo>
        </S.MainSection>
      </S.Content>
    </S.Container>
  );
}