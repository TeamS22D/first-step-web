import * as S from "./Searchbar.style";
import Icon from "/assets/Searchbar/icon.png"

interface ISearchbarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Searchbar({onChange}:ISearchbarProps) {
    return (
        <S.Container>
            <S.Searchbar>
                <img src={Icon} alt="검색" />
                <input placeholder="검색어를 입력하세요." onChange={onChange}/>
            </S.Searchbar>
        </S.Container>
    )
}


export default Searchbar;