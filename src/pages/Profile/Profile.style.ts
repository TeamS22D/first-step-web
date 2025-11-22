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

/* 상단 프로필 */
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
  font-size: 14px;
  color: #535252;
`;

export const LogoutBtn = styled.button`
  background: #f1414c;
  color: #fff;
  padding: 7px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

/* 드롭다운 + 탭 + 연속 학습일 */
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftControls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

/* 드롭다운 */
export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownBox = styled.div`
  padding: 10px 16px;
  background: #fff;
  border-radius: 100px;
  border: 1.5px solid #f5f5f5;
  display: flex;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
`;

export const Arrow = styled.span<{ open?: boolean }>`
  font-size: 11px;
  color: ${(p) => (p.open ? "#6A6A6A" : "#D9D9D9")};
`;

export const OptionList = styled.div`
  position: absolute;
  top: 46px;
  width: 100%;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  z-index: 10;
`;

export const Option = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
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
  cursor: pointer;
  font-size: 11px;
`;

/* 연속 학습일 카드 */
export const TopRightSingleCard = styled.div`
  width: 260px;
  background: white;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 0 6px #f1f1f1;
`;

export const TopRightIcon = styled.div<{ color: string }>`
  width: 34px;
  height: 34px;
  background: ${(p) => p.color};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TopRightNumber = styled.div<{ green?: boolean }>`
  font-size: 28px;
  color: ${(p) => (p.green ? "#38C97C" : "#333")};
  font-weight: 700;
`;

export const TopRightLabel = styled.div`
  font-size: 14px;
  color: #7d7d7d;
`;

/* ⭐ 2-컬럼 구조 ⭐ */
export const MainTwoColumns = styled.div`
  display: flex;
  gap: 28px;
  align-items: flex-start;
`;

/* 왼쪽 컬럼 */
export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const GraphCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 22px 17px;
  box-shadow: 0 0 6px #f1f1f1;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  margin-bottom: 18px;
  font-weight: 600;
`;

export const GraphPlaceholder = styled.div`
  height: 280px;
  background: #f7f7f7;
  border-radius: 12px;
`;

/* 아래 3개 통계박스 */
export const BottomStatsRow = styled.div`
  display: flex;
  gap: 18px;
`;

export const StatCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 18px;
  text-align: center;
  padding: 25px 18px;
  box-shadow: 0 0 6px #f1f1f1;
`;

export const StatPercent = styled.div<{ pink?: boolean; orange?: boolean; green?: boolean }>`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${(p) =>
    p.pink ? "#0ACF83" : p.orange ? "#AF5EFF" : p.green ? "#0099FF" : "#333"};
`;

export const StatValue = styled.div`
  font-size: 14px;
  color: #747474;
`;

/* 오른쪽 컬럼 */
export const RightColumn = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const TopRightCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 0 6px #f1f1f1;
`;

/* 학습효과 박스 */
export const LearningBox = styled.div`
  background: white;
  padding: 22px;
  border-radius: 18px;
  box-shadow: 0 0 6px #f1f1f1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LearningHeader = styled.div<{ green?: boolean }>`
  background: ${(p) => (p.green ? "#3FB98A" : "#3FB98A")};
  padding: 8px 16px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  width: fit-content;
`;

export const LearningText = styled.div`
  white-space: pre-line;
  font-size: 15px;
  line-height: 1.6;
  color: #555;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
`;