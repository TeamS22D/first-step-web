import { useState } from "react";
import * as S from "./Profile.style";

export default function Profile() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최근 한 달간");

  const options = ["최근 한 달간", "최근 일 년간", "최근 일주일간"];

  const handleSelect = (v: string) => {
    setSelected(v);
    setOpen(false);
  };

  const [activeTab, setActiveTab] = useState("전체");

  const tabs = ["전체", "문서", "채팅", "메일"];

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
            {tabs.map((t) => (
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

        <S.MiddleSection>
          <S.GraphCard>
            <S.CardTitle>기간별 히스토리</S.CardTitle>
          </S.GraphCard>

          <S.RightCards>
            <S.SmallCard>
              <S.SmallIcon flame />
              <S.SmallNumber>1일</S.SmallNumber>
              <S.SmallLabel>연속 학습일</S.SmallLabel>
            </S.SmallCard>

            <S.SmallCard>
              <S.SmallIcon circle />
              <S.SmallNumber green>75%</S.SmallNumber>
              <S.SmallLabel>상위</S.SmallLabel>
            </S.SmallCard>
          </S.RightCards>
        </S.MiddleSection>

        <S.BottomStats>
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
        </S.BottomStats>

      </S.Content>
    </S.Container>
  );
}