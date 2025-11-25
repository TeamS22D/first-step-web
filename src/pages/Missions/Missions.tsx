import { Outlet } from "react-router";
import Search from "./components/Searchbar";
import Status from "./components/Status";
import * as S from "./styles/Missions.style"
import { useCallback, useState } from "react";
import Category from "./components/Category";

function Missions() {
  const [keyword, setKeyword] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
  }, [])

  return (
    <S.Container>
      <Status />
      <Search onChange={onChange} keyword={keyword} />
      <Category />
      <Outlet />
    </S.Container>
  )
}

export default Missions;