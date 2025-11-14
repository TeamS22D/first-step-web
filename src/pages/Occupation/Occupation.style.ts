import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
`;

export const Description = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;

  p {
    margin: 4px 0;
  }
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 790px;
  width: 100%;
  margin: 0 auto 32px;
  justify-items: center;
`;

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 520px;
  width: 100%;
  margin: 0 auto 40px;
  justify-items: center;
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

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
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

export const SubmitButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#0acf83")};
  color: white;
  border: none;
  border-radius: 10px;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease;
`;