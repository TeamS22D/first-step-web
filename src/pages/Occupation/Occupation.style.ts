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

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;

  strong {
    color: #222;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 40px;
`;

export const Card = styled.div<{ $selected: boolean }>`
  position: relative;
  width: 180px;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 2px solid transparent;

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
      background: #EAF8F2;
      box-shadow: 0 0px 6px #3FB98A;
    `}
`;

export const CheckCircle = styled.div<{ $selected: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "#4caf50" : "#ccc")};
  color: #4caf50;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const SubmitButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#4caf50")};
  color: white;
  border: none;
  border-radius: 10px;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#43a047")};
  }
`;
