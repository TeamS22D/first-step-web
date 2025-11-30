import { useLocation } from "react-router";
import * as S from "../styles/Category.style"
import { CategoryList } from "@/constants/MissionFilter.constants";

function Category() {
  const location = useLocation();

  return (
    <S.Container>
      {CategoryList.map((elem) => {
        if (location.pathname.includes(elem.to)) {
          return (
            <S.Category selected to={elem.to} key={elem.id}>{elem.value}</S.Category>
          )
        }
        return (
          <S.Category to={elem.to} key={elem.id}>{elem.value}</S.Category>
        )
      })}
    </S.Container>
  )
}

export default Category;