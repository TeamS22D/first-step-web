import * as S from "./Searchbar.style";
import Icon from "/assets/Searchbar/icon.png"

function Searchbar() {
    return (
        <S.Container>
            <S.Searchbar>
                <img src={Icon} alt="검색" />
                <input placeholder="검색어를 입력하세요."/>
            </S.Searchbar>
        </S.Container>
    )
}


export default Searchbar;