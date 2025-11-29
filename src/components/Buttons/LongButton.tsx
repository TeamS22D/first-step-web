import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button<{ disabled?: boolean }>`
  width: 500px;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 600;
  border: 0;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ disabled }) => (disabled ? "#E5E5E5" : "#0ACF83")};
  color: ${({ disabled }) => (disabled ? "#9E9E9E" : "#fff")};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: all 0.2s ease;

  text-decoration: none !important;

  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none !important;
  }
`;

type LongButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  onClick?: () => void;
};

const LongButton = ({ children, disabled, to, onClick }: LongButtonProps) => {
  const button = (
    <Button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );

  if (to && !disabled) {
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        {button}
      </Link>
    );
  }

  return button;
};

export default LongButton;
