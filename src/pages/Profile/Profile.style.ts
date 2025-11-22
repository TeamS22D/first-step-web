import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: none;
  width: 100%;
  min-height: 100%;
  padding: 20px 30px 0px 30px;

  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow-y: visible;
`;


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
  margin-bottom: 8px;
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

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LeftControls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownBox = styled.div`
  padding: 14px 20px;
  background: #fff;
  border-radius: 30px;
  border: 1.5px solid #EFEFEF;
  font-size: 15px;
  font-weight: 500;
  color: #6A6A6A;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const Arrow = styled.span<{ open?: boolean }>`
  font-size: 12px;
  color: ${(p) => (p.open ? "#6A6A6A" : "#D9D9D9")};
`;

export const OptionList = styled.div`
  position: absolute;
  width: 100%;
  top: 52px;
  background: white;
  border-radius: 10px;
  border: 1px solid #EBEBEB;
  overflow: hidden;
  z-index: 100;
`;

export const Option = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 14px;
`;

export const FilterTab = styled.div<{ active?: boolean }>`
  padding: 11px 28px;
  border-radius: 100px;
  background: ${(p) => (p.active ? "#3FB98A" : "#F2F2F2")};
  color: ${(p) => (p.active ? "white" : "#6A6A6A")};
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
`;

export const SmallCard = styled.div`
  width: 260px;
  height: 80px;
  background: #fff;
  border-radius: 20px;
  padding: 22px;
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
  font-size: 15px;
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
  font-weight: 600;
  color: #3FB98A;
  line-height: 1;
`;

export const ValueUnit = styled.div`
  font-size: 18px;
  color: #6A6A6A;
  line-height: 1.1;
`;

export const MainSection = styled.div`
  display: flex;
  gap: 28px;
  align-items: flex-start;
`;

export const GraphCard = styled.div`
  height: 384px;
  background: white;
  padding: 22px 17px;
  border-radius: 18px;
  box-shadow: 0px 0px 6px #F1F1F1;

  margin-bottom: 10px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2B2B2B;
`;

export const SideInfo = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

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
  color: #6A6A6A;
  font-weight: 400;
  line-height: 1.1;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e7e7e7;
`;

export const StatsBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 0 6px #F1F1F1;
  padding: 26px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0px; 
`;

export const StatItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const StatPercent = styled.div<{
  green?: boolean;
  purple?: boolean;
  blue?: boolean;
}>`
  font-size: 22px;
  font-weight: 700;
  color: ${(p) =>
    p.green ? "#3FB98A" :
    p.purple ? "#A05BFF" :
    p.blue ? "#0099FF" :
    "#333"};
  margin-bottom: 6px;
`;

export const StatValue = styled.div`
  font-size: 14px;
  color: #6b6b6b;
`;