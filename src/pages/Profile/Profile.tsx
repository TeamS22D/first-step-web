import { useState } from "react";
import * as S from "./Profile.style";

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

        {/* 드롭다운 + 탭 + 연속학습일 */}
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

          <S.TopRightSingleCard>
            <S.TopRightIcon color="#F27C6A" />
            <S.TopRightNumber>1일</S.TopRightNumber>
            <S.TopRightLabel>연속 학습일</S.TopRightLabel>
          </S.TopRightSingleCard>
        </S.TopSection>

        {/* ⭐ 2-컬럼 전체 레이아웃 ⭐ */}
        <S.MainTwoColumns>

          {/* LEFT : 그래프 + 통계 3개 */}
          <S.LeftColumn>
            <S.GraphCard>
              <S.CardTitle>기간별 히스토리</S.CardTitle>
              <S.GraphPlaceholder />
            </S.GraphCard>

            {/* 그래프 아래 통계 3개 */}
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
          </S.LeftColumn>

          {/* RIGHT : 상위 + 학습효과/개선정도 */}
          <S.RightColumn>
            <S.TopRightCard>
              <S.TopRightIcon color="#38C97C" />
              <S.TopRightNumber green>75%</S.TopRightNumber>
              <S.TopRightLabel>상위</S.TopRightLabel>
            </S.TopRightCard>

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
          </S.RightColumn>

        </S.MainTwoColumns>

      </S.Content>
    </S.Container>
  );
}
