import * as S from './Mail.style'

interface TopTextareaProps {
    title: string;
    placeholder: string;
}

export function TopTextarea({ title, placeholder }: TopTextareaProps) {
    return (
        <S.TopTextarea>
            <S.Title>{title}</S.Title>
            <S.TopContent>
                <S.Content placeholder={placeholder} />
            </S.TopContent>
        </S.TopTextarea>
    );
}

export default function Chat() {
    return (
        <S.Body>
            <S.Container>
                <S.Wrapper>
                    <S.Topbar>
                        새 메일
                    </S.Topbar>
                    <form>
                        <TopTextarea title = '받는 사람' placeholder = '받는 이를 입력하세요.'/>
                        <TopTextarea title = '제목' placeholder = '제목을 입력하세요.'/>
                        <S.BottomTextarea>
                            <S.Content
                                placeholder="내용을 입력하세요."
                            />
                        </S.BottomTextarea>
                    </form>
                </S.Wrapper>
            </S.Container>
        </S.Body>
    )
}

