import styled from "styled-components";

interface IBarSize {
  size: string;
}

export const Status = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StatusBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 24px 44px;
  box-shadow: ${(props) => props.theme.shadowLight};
  border-radius: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: end;
`

export const BarEmpty = styled.div`
  width: 543px;
  height: 6px;
  background-color: #D9D9D9;
  border-radius: 100px;
`

export const BarFilled = styled.div<IBarSize>`
  width: ${(props) => props.size}%;
  height: 6.5px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 100px;
`

export const CountOfMission = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.mainColor};
  font-weight: 700;
`

export const CountSuffix = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 600;
`

export const RestMission = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 500;
`

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  background-color: ${(props) => props.theme.bgPrimary};
  box-shadow: ${(props) => props.theme.shadowLight};
  border-radius: 10px;
  padding: 0px 34px;
`

export const StatRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Box = styled.div`
  display: flex;
  padding: 4px 12px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundLight};
  font-size: 8px;
  font-weight: 600;
  color: ${(props) => props.theme.textThird};
`

export const StatText = styled.span`
  font-size: 10px;
  letter-spacing: 5%;
  font-weight: 500;
  color: ${(props) => props.theme.textSecondary};
`

export const StatHighlight = styled(StatText)`
  color: ${(props) => props.theme.mainColor};
`