import Searchbar from "@/components/Searchbar/Searchbar"
import * as S from "../styles/Searchbar.style"
import { Sort } from "@constants/MissionFilter.constants"

interface ISearchbarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    keyword: string;
}

function Search({onChange, keyword} : ISearchbarProps) {
  return (
    <S.SearchContainer>
      <Searchbar onChange={onChange} value={keyword} />
      <S.MenuContainer>
        <S.FilterMenu>
          {Sort.map((elem) => {
            return (
              <option value={elem.value} key={elem.id}>{elem.value}</option>
            )
          })}
        </S.FilterMenu>
      </S.MenuContainer>
    </S.SearchContainer>
  )
}

export default Search;