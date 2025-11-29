import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 37px;
  font-weight: 700;
  color: #595959;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 1;
  color: #9F9C9C;
  margin-bottom: 30px;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
`;

export const Card = styled.div<{ $selected: boolean }>`
  position: relative;
  width: 180px;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 0px 4px #bfbfbf;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background: #eaf8f2;
      box-shadow: 0 0px 6px #3fb98a;
    `}
`;

export const CheckCircle = styled.div<{ $selected: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "#89DCBC" : "#ccc")};
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
    margin-top: 10px;
  }
`;


export const LongButton = styled.a`
  text-decoration: none;
`;