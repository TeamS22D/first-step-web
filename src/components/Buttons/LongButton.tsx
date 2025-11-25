import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)<{ disabled?: boolean }>`
  width: 500px;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 600;
  border: 0;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ disabled }) =>
    disabled ? "#E5E5E5" : "#0ACF83"};
  color: ${({ disabled }) =>
    disabled ? "#9E9E9E" : "#fff"};
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s ease;
`;

const GreenButton = ({
  children,
  disabled,
  to,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  to: string;
}) => {
  return <Button to={to} disabled={disabled}>{children}</Button>;
};

export default GreenButton;