import Search from "@/components/Missions/components/Searchbar";
import * as S from "./Feedback.style"
import Category from "@/components/Missions/components/Category";
import { useCallback, useState } from "react";

function Feedback() {
  const [keyword, setKeyword] = useState('');
  
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
  }, [])

  return (
    <S.Container>
      <Search onChange={onChange} keyword={keyword} />
      <Category />
      <S.NewOutlet />
    </S.Container>
  )
}

export default Feedback;