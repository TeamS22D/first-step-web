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

import axiosInstance from "../../hooks/axiosInstance";

import attendanceImg from "/assets/Profile/attendance.png";
import percentImg from "/assets/Profile/percent.png";

type HistoryPoint = {
  day: string;
  document: number;
  chat: number;
  mail: number;
};

type GraphResponse = {
  history: HistoryPoint[];
};

type AttendanceStreakResponse = {
  streak: number;
};

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최근 한 달간");
  const [activeTab, setActiveTab] = useState("전체");

  const [clickedData, setClickedData] = useState<HistoryPoint | null>(null);
  const [chartData, setChartData] = useState<HistoryPoint[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const [streak, setStreak] = useState<number | null>(null);
  const [loadingStreak, setLoadingStreak] = useState(false);

  const options = ["최근 한 달간", "최근 일 년간", "최근 일주일간"];

  const handleSelect = (v: string) => {
    setSelected(v);
    setOpen(false);
  };

  useEffect(() => {
    const fetchAttendanceStreak = async () => {
      setLoadingStreak(true);
      try {
        const res = await axiosInstance.get<AttendanceStreakResponse>(
          "/user/attendanceStreak"
        );

        if (typeof res.data.streak === "number") {
          setStreak(res.data.streak);
        } else {
          console.warn(
            "attendanceStreak 응답에 streak 필드가 없습니다:",
            res.data
          );
          setStreak(null);
        }
      } catch (err) {
        console.error("연속 학습일 불러오기 오류:", err);
        setStreak(null);
      } finally {
        setLoadingStreak(false);
      }
    };

    fetchAttendanceStreak();
  }, []);

  useEffect(() => {
    const fetchGraph = async () => {
      setLoadingHistory(true);

      const range =
        selected === "최근 일 년간"
          ? "year"
          : selected === "최근 일주일간"
          ? "week"
          : "month";

      try {
        const res = await axiosInstance.get<GraphResponse>(
          "/user-mission/graph",
          { params: { range } }
        );

        if (Array.isArray(res.data.history)) {
          setChartData(res.data.history);
        } else {
          setChartData([]);
          console.warn("graph 응답에 history 배열이 없습니다:", res.data);
        }
        setClickedData(null);
      } catch (err) {
        console.error("그래프 데이터 불러오기 오류:", err);
        setChartData([]);
        setClickedData(null);
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchGraph();
  }, [selected]);

  const handleLineClick = (e: any) => {
    if (!e || !e.payload) return;
    const p = e.payload as HistoryPoint;

    setClickedData({
      day: p.day,
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
                  {loadingStreak ? "-" : streak ?? "-"}
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
                      dataKey="day"
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
                  <S.ValueNumber>75</S.ValueNumber>
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
