import styled from "styled-components";

/* 전체 */
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 40px 50px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* 프로필 카드 */
export const TopProfileCard = styled.div`
  background: #fff;
  padding: 24px 28px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px #f1f1f1;
`;

export const ProfileLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Avatar = styled.div`
  width: 58px;
  height: 58px;
  background: #dcdcdc;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const SubInfo = styled.div`
  color: #535252;
  font-size: 14px;
`;

export const LogoutBtn = styled.button`
  background: #F1414C;
  color: white;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
`;

/* 상단 상단 컨트롤 영역 */
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LeftControls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

/* 드롭다운 */
export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownBox = styled.div`
  padding: 10px 16px;
  background: #fff;
  border-radius: 100px;
  border: 1.5px solid #F5F5F5;
  font-size: 13px;
  font-weight: 500;
  color: #6A6A6A;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const Arrow = styled.span<{ open?: boolean }>`
  font-size: 11px;
  color: ${(p) => (p.open ? "#6A6A6A" : "#D9D9D9")};
`;

export const OptionList = styled.div`
  position: absolute;
  width: 100%;
  top: 46px;
  background: white;
  border-radius: 10px;
  border: 1px solid #EBEBEB;
  overflow: hidden;
  z-index: 100;
`;

export const Option = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  &:hover { background: #f5f5f5; }
`;

/* 탭 */
export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterTab = styled.div<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 50px;
  background: ${(p) => (p.active ? "#3FB98A" : "#F2F2F2")};
  color: ${(p) => (p.active ? "white" : "#6A6A6A")};
  font-size: 11px;
  cursor: pointer;
`;

/* ---- 작은 카드 ---- */
export const SmallCard = styled.div`
  width: 260px;
  height: 100px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 6px #F1F1F1;

  display: flex;
  gap: 18px;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
  }
`;

export const SmallCardTitle = styled.div`
  color: #848484;
  font-size: 16px;
  font-weight: 400;
`;

export const ValueRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-top: 4px;
`;

export const ValueNumber = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #3FB98A;
  line-height: 1;
`;

export const ValueUnit = styled.div`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  line-height: 1.1;
`;

/* 메인 섹션 */
export const MainSection = styled.div`
  display: flex;
  gap: 28px;
  align-items: flex-start;
`;

export const GraphCard = styled.div`
  background: white;
  padding: 22px 17px;
  border-radius: 18px;
  box-shadow: 0px 0px 6px #F1F1F1;
  margin-bottom: 26px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2B2B2B;
`;

export const GraphPlaceholder = styled.div`
  height: 280px;
  background: #F7F7F7;
  border-radius: 12px;
`;

/* 오른쪽 정보 */
export const SideInfo = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

/* 학습효과 박스 */
export const LearningBox = styled.div`
  background: white;
  padding: 22px;
  border-radius: 18px;
  box-shadow: 0 0 6px #F1F1F1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LearningHeader = styled.div<{ green?: boolean }>`
  background: ${(p) => (p.green ? "#3FB98A" : "#3FB98A")};
  padding: 7px 18px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  width: fit-content;
  font-size: 14px;
`;

export const LearningText = styled.div`
  white-space: pre-line;
  font-size: 14px;
  font-weight: 400;
  color: #6A6A6A;
  line-height: 1.6;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e7e7e7;
`;

/* 그래프 아래 통계 3개 */
export const BottomStatsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
`;

export const StatCard = styled.div`
  flex: 1;
  background: #fff;
  padding: 18px 14px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0px 0px 6px #F1F1F1;
`;

export const StatPercent = styled.div<{ pink?: boolean; orange?: boolean; green?: boolean }>`
  font-size: 22px;
  font-weight: 700;
  color: ${(p) =>
    p.pink ? "#0ACF83" : p.orange ? "#AF5EFF" : p.green ? "#0099FF" : "#333"};
  margin-bottom: 6px;
`;

export const StatValue = styled.div`
  font-size: 13px;
  color: #6b6b6b;
`;