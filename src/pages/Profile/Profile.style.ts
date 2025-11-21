import styled from "styled-components";

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

export const TopProfileCard = styled.div`
  background: #fff;
  padding: 24px 28px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 6px #F1F1F1;
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
  margin-bottom: 8px;
`;

export const SubInfo = styled.div`
  color: #535252;
  font-size: 14px;
  font-weight: 400;
`;

export const LogoutBtn = styled.button`
  background: #F1414C;
  color: #fff;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 11px;
  background: ${(p) => (p.active ? "#3FB98A" : "#F2F2F2")};
  color: ${(p) => (p.active ? "white" : "#6A6A6A")};
  font-weight: 500;
  cursor: pointer;
`;

export const MiddleSection = styled.div`
  display: flex;
  gap: 28px;
`;

export const GraphCard = styled.div`
  flex: 1;
  background: white;
  padding: 22px 17px;
  border-radius: 18px;
  box-shadow: 0px 0px 6px #F1F1F1;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2B2B2B;
`;

export const GraphPlaceholder = styled.div`
  height: 280px;
  background: #f3f3f3;
  border-radius: 12px;
`;

export const RightCards = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SmallCard = styled.div`
  background: white;
  padding: 22px;
  border-radius: 16px;
  text-align: left;
  position: relative;
  box-shadow: 0px 0px 6px #F1F1F1;
`;

export const SmallIcon = styled.div<{ flame?: boolean; circle?: boolean }>`
  width: 34px;
  height: 34px;
  background: ${(p) =>
    p.flame ? "#ff7262" : p.circle ? "#38c97c" : "#ddd"};
  border-radius: 10px;
  margin-bottom: 14px;
`;

export const SmallNumber = styled.div<{ green?: boolean }>`
  font-size: 28px;
  font-weight: 700;
  color: ${(p) => (p.green ? "#38c97c" : "#333")};
`;

export const SmallLabel = styled.div`
  color: #7d7d7d;
  margin-top: 4px;
`;

export const BottomStats = styled.div`
  display: flex;
  gap: 24px;
`;

export const StatCard = styled.div`
  flex: 1;
  background: #fff;
  padding: 26px 20px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0px 0px 6px #F1F1F1;
`;

export const StatPercent = styled.div<{ pink?: boolean; orange?: boolean; green?: boolean }>`
  font-size: 26px;
  font-weight: 700;
  color: ${(p) =>
    p.pink ? "#ff729f" : p.orange ? "#ff9c42" : p.green ? "#38c97c" : "#333"};
  margin-bottom: 8px;
`;

export const StatValue = styled.div`
  font-size: 15px;
  color: #6b6b6b;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: -5px;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: auto;
`;

export const DropdownBox = styled.div`
  padding: 10px 16px;
  background: #fff;
  border-radius: 100px;
  border: 1.5px solid #f5f5f5;
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
  top: 46px;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  border: 1px solid #EBEBEB;
  overflow: hidden;
  z-index: 20;
`;

export const Option = styled.div`
  padding: 10px 16px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterTab = styled.div<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 11px;
  background: ${(p) => (p.active ? "#3FB98A" : "#F2F2F2")};
  color: ${(p) => (p.active ? "white" : "#6A6A6A")};
  font-weight: 500;
  cursor: pointer;
`;