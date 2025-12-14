import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4vh 6vw 0vh 6vw;
    gap: 40px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
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
  background: #f1414c;
  color: #fff;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
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
  border: 1.5px solid #efefef;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  font-size: 15px;
`;

export const Arrow = styled.span<{ open?: boolean }>`
  font-size: 12px;
  color: ${({ open }) => (open ? "#6a6a6a" : "#d9d9d9")};
`;

export const OptionList = styled.div`
  position: absolute;
  width: 100%;
  top: 52px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  overflow: hidden;
  z-index: 100;
`;

export const Option = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 14px;
`;

export const FilterTab = styled.div<{ active?: boolean }>`
  padding: 11px 28px;
  border-radius: 100px;
  background: ${({ active }) => (active ? "#3fb98a" : "#f2f2f2")};
  color: ${({ active }) => (active ? "#fff" : "#6a6a6a")};
  cursor: pointer;
`;

export const SmallCard = styled.div`
  width: 260px;
  height: 80px;
  background: #fff;
  border-radius: 20px;
  padding: 22px;
  box-shadow: 0 0 6px #f1f1f1;
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
`;

export const ValueRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 4px
`;

export const ValueNumber = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #3fb98a;
`;

export const ValueUnit = styled.div`
  font-size: 18px;
  color: #6a6a6a;
`;

export const MainSection = styled.div`
  display: flex;
  gap: 28px;
`;

export const GraphCard = styled.div`
  background: #fff;
  padding: 22px 17px;
  border-radius: 18px;
  box-shadow: 0 0 6px #f1f1f1;
  margin-bottom: 30px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SideInfo = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const LearningBox = styled.div`
  background: #fff;
  padding: 22px;
  border-radius: 18px;
  box-shadow: 0 0 6px #f1f1f1;
  height: 380px;
`;

export const LearningHeader = styled.div`
  background: #3fb98a;
  padding: 7px 18px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  width: fit-content;
`;

export const LearningText = styled.div`
  margin-top: 10px;
  color: #6a6a6a;
  font-size: 14px;
  white-space: pre-line;
  line-height: 1.4;
`;

export const Divider = styled.div`
  width: 95%;
  height: 1px;
  background: #e7e7e7;
  margin: 25px 5px;
  border-radius: 2px;
`;

export const StatsBox = styled.div`
  background: #fff;
  padding: 26px 30px;
  border-radius: 18px;
  box-shadow: 0 0 6px #f1f1f1;
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const StatPercent = styled.div<{
  $chat?: boolean;
  $document?: boolean;
  $mail?: boolean;
}>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ $document, $chat, $mail }) =>
    $document ? "#0ACF83" : $chat ? "#AF5EFF" : $mail ? "#0099FF" : "#333"};
`;

export const StatValue = styled.div`
  color: #6b6b6b;
`;

export const TooltipBox = styled.div`
  background: white;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 6px;

  .day {
    font-weight: 700;
    margin-bottom: 4px;
  }

  .document {
    color: #0acf83;
  }
  .chat {
    color: #af5eff;
  }
  .mail {
    color: #0099ff;
  }
`;
