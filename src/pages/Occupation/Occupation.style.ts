import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 37px;
  font-weight: 600;
  color: #9F9C9C;
  margin-bottom: 32px;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #9F9C9C;
  margin-bottom: 64px;
  font-weight: 500;

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
  width: 200px;
  height: 180px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 0px 4px #bfbfbf;
  transition: all 0.2s ease;

  img {
    width: 148px;
    height: 130px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #404040;
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "#89DCBC" : "#ccc")};
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
    margin-top: 20px;
  }
`;

export const SubmitButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#0acf83")};
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 208px;
  font-size: 16px;
  font-weight: 800;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease;
`;