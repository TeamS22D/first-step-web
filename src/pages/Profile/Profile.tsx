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

import attendanceImg from "/assets/Profile/attendance.png";
import percentImg from "/assets/Profile/percent.png";

type HistoryPoint = {
  day: string;
  document: number;
  chat: number;
  mail: number;
};

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최근 한 달간");
  const [activeTab, setActiveTab] = useState("전체");

  const [clickedData, setClickedData] = useState<HistoryPoint | null>(null);

  const options = ["최근 한 달간", "최근 일 년간", "최근 일주일간"];

  const handleSelect = (v: string) => {
    setSelected(v);
    setOpen(false);
  };


  const data_month: HistoryPoint[] = [
    { day: "0일", document: 3300, chat: 1800, mail: 900 },
    { day: "5일", document: 3300, chat: 1800, mail: 900 },
    { day: "10일", document: 3000, chat: 1600, mail: 1300 },
    { day: "15일", document: 2400, chat: 2000, mail: 900 },
    { day: "20일", document: 2800, chat: 1500, mail: 1000 },
    { day: "25일", document: 3100, chat: 1700, mail: 1300 },
    { day: "30일", document: 3200, chat: 1900, mail: 1000 },
  ];

  const data_year: HistoryPoint[] = [
    { day: "2월", document: 2000, chat: 1200, mail: 700 },
    { day: "4월", document: 2200, chat: 1300, mail: 800 },
    { day: "6월", document: 2500, chat: 1500, mail: 900 },
    { day: "8월", document: 2600, chat: 1700, mail: 1000 },
    { day: "10월", document: 2800, chat: 1800, mail: 1100 },
    { day: "12월", document: 3000, chat: 1900, mail: 1200 },
  ];

  const data_week: HistoryPoint[] = [
    { day: "월", document: 1000, chat: 500, mail: 200 },
    { day: "화", document: 1300, chat: 600, mail: 300 },
    { day: "수", document: 1200, chat: 800, mail: 350 },
    { day: "목", document: 1500, chat: 700, mail: 300 },
    { day: "금", document: 1600, chat: 900, mail: 400 },
    { day: "토", document: 1700, chat: 950, mail: 450 },
    { day: "일", document: 1800, chat: 1000, mail: 500 },
  ];


  const normalizeData = (data: HistoryPoint[]): HistoryPoint[] => {
    const max = Math.max(...data.flatMap((d) => [d.document, d.chat, d.mail]));
    return data.map((d) => ({
      day: d.day,
      document: Math.round((d.document / max) * 100),
      chat: Math.round((d.chat / max) * 100),
      mail: Math.round((d.mail / max) * 100),
    }));
  };

  const getRawData = (): HistoryPoint[] => {
    if (selected === "최근 일 년간") return data_year;
    if (selected === "최근 일주일간") return data_week;
    return data_month;
  };

  const chartData = normalizeData(getRawData());

  useEffect(() => {
    setClickedData(null);
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
    chartData[chartData.length - 1] ?? (null as any as HistoryPoint | null);
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
                <S.ValueNumber>1</S.ValueNumber>
                <S.ValueUnit>일</S.ValueUnit>
              </S.ValueRow>
            </div>
          </S.SmallCard>
        </S.TopSection>

        <S.MainSection>
          <div style={{ flex: 1 }}>
            <S.GraphCard>
              <S.CardTitle>기간별 히스토리</S.CardTitle>

              <ResponsiveContainer width="100%" height={280}>
                <LineChart
                  data={chartData}
                  margin={{ top: 10, left: 0, right: 10, bottom: 0 }}
                >
                  <CartesianGrid stroke="#eee" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "#555", fontSize: 12 }} />
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
