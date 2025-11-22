import { useState } from "react";
import * as S from "./Profile.style";

import attendanceImg from "/assets/Profile/attendance.png";
import percentImg from "/assets/Profile/percent.png";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최근 한 달간");
  const [activeTab, setActiveTab] = useState("전체");

  const options = ["최근 한 달간", "최근 일 년간", "최근 일주일간"];

  const handleSelect = (v: string) => {
    setSelected(v);
    setOpen(false);
  };

  return (
    <S.Container>
      <S.Content>

        {/* 상단 프로필 */}
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

        {/* 상단 드롭다운 + 탭 + 연속 학습일 */}
        <S.TopSection>
          <S.LeftControls>
            <S.FilterRow>

              {/* 드롭다운 */}
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

              {/* 탭 */}
              <S.FilterTabs>
                {["전체", "문서", "채팅", "메일"].map((t) => (
                  <S.FilterTab
                    key={t}
                    active={activeTab === t}
                    onClick={() => setActiveTab(t)}
                  >
                    {t}
                  </S.FilterTab>
                ))}
              </S.FilterTabs>

            </S.FilterRow>
          </S.LeftControls>

          {/* 연속 학습일 카드 */}
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

        {/* 메인 영역 */}
        <S.MainSection>

          {/* 왼쪽 그래프 + 하단 통계 */}
          <div style={{ flex: 1 }}>
            <S.GraphCard>
              <S.CardTitle>기간별 히스토리</S.CardTitle>
              <S.GraphPlaceholder />
            </S.GraphCard>

            {/* 그래프 아래 통계 */}
            <S.BottomStatsRow>

              <S.StatCard>
                <S.StatPercent pink>80%</S.StatPercent>
                <S.StatValue>채팅형</S.StatValue>
              </S.StatCard>

              <S.StatCard>
                <S.StatPercent orange>64%</S.StatPercent>
                <S.StatValue>문서형</S.StatValue>
              </S.StatCard>

              <S.StatCard>
                <S.StatPercent green>34%</S.StatPercent>
                <S.StatValue>메일형</S.StatValue>
              </S.StatCard>

            </S.BottomStatsRow>
          </div>

          {/* 오른쪽 정보 */}
          <S.SideInfo>

            {/* 상위 카드 */}
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

            {/* 학습효과 + 개선정도 */}
            <S.LearningBox>
              <S.LearningHeader>학습 효과</S.LearningHeader>
              <S.LearningText>
                점점 맞춤법이 좋아지고 있어요~!{"\n\n"}
                갈수록 점점 내용의 흐름이 좋아지고 있으며  
                예의와 격식을 갖춘 내용, 단어로 말하고 있는 듯 합니다!!{"\n\n"}
                앞으로도 화이팅!
              </S.LearningText>

              <S.Divider />

              <S.LearningHeader green>개선 정도</S.LearningHeader>
              <S.LearningText>
                점점 맞춤법이 좋아지고 있어요~!{"\n\n"}
                갈수록 점점 내용의 흐름이 좋아지고 있으며  
                예의와 격식을 갖춘 내용, 단어로 말하고 있는 듯 합니다!!{"\n\n"}
                앞으로도 화이팅!
              </S.LearningText>
            </S.LearningBox>

          </S.SideInfo>

        </S.MainSection>

      </S.Content>
    </S.Container>
  );
}
