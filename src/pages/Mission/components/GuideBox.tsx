import { GlobalStyle } from "@/styles/GlobalStyle";
import * as S from '../styles/GuideBox';
import ImageFirm from '@/assets/Mission/GuideBox/HintFirm.png'
import IconAdvice from '@/assets/Mission/GuideBox/Advice.png'


interface IconProps {
    src: string;
    alt: string;
}


interface ImageProps {
    src: string;
    alt: string;
}

interface CategoryProps {
    category: number;
}

const Icon = ({src, alt}:IconProps) => {
    return (
        <S.Icon src={src} alt={alt} />
    )
}

const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src={src} alt={alt} />
    )
}

const stepLabels = ["상황설명", "보고서", "상사의 말"];

const talk1: string = '상황설명'
const talk2: string = '상황설명'
const talk3: string = '상황설명'

const firm: string = '처음 써보는 거라 잘 모르겠지? 필요하다면 힌트를 줄게요.'

export function CategoryBox({category}: CategoryProps ) {
    return(
        <S.categoryContainer>
            {stepLabels.map((label, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center" }}>
                    <S.category on={category === i}>{label}</S.category>
                </span>
            ))}
        </S.categoryContainer>
    )
}

export default function GuideBox() {
    return (
        <>
            <GlobalStyle/>
            <S.guideContainer>
                <S.TitleBox>
                    <span className="Title">[채팅] 연차 요청을 해 보세요!</span>
                    <span className="SubTitle">실제 실무 상황을 가정한 연차 요청 및 업무 조율 커뮤니케이션 연습</span>
                </S.TitleBox>
                <S.MiddleContainer>
                    <CategoryBox category={0}/>
                    <S.Word>{talk1}</S.Word>
                </S.MiddleContainer>
                <S.BottomBox>
                    <S.BottomBoxTitle>
                        <Icon src={IconAdvice} alt=''/>
                        상사의 조언
                    </S.BottomBoxTitle>
                    <S.Speech>{firm}</S.Speech>
                    <Image src={ImageFirm} alt=''/>
                </S.BottomBox>
            </S.guideContainer>
        </>
    )
}
