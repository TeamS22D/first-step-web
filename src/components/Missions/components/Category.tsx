import { useLocation } from "react-router";
import * as S from "../styles/Category.style"

export interface ICategoryItem {
  id: number;
  value: string;
  to: string;
}

interface ICategoryProps {
  categoryList: ICategoryItem[];
}

function Category({ categoryList }: ICategoryProps) {
  const location = useLocation();

  return (
    <S.Container>
      {categoryList.map((elem) => {
        const isSelected = location.pathname.slice(location.pathname.length - elem.to.length, location.pathname.length).includes(elem.to);
        
        return (
          <S.Category 
            selected={isSelected} 
            to={elem.to} 
            key={elem.id}
          >
            {elem.value}
          </S.Category>
        )
      })}
    </S.Container>
  )
}

export default Category;