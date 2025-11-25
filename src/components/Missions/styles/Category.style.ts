import { Link } from "react-router";
import styled from "styled-components";

interface ICategory {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`

export const Category = styled(Link)<ICategory>`
  display: flex;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 14px;
  background-color: ${(props) => props.selected ? props.theme.mainColor2 : props.theme.backgroundLight};
  color: ${(props) => props.selected ? '#fff' : props.theme.textThird};
`