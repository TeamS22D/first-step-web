import { GlobalStyle } from "@/styles/GlobalStyle";
import * as S from '../styles/GuideBox';
import ImageFirm from '@/assets/Mission/GuideFirm.png'
import IconAdvice from '@/assets/Mission/advice.png'


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

const talk: string = '당신은 IT개발팀의 신입 개발자입니다. 현재 팀의 시스템에 장애가 발생했고, 처리 과정을 상신해야 합니다.'
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
                    <span className="Title">[보고서] 업무 보고서 작성</span>
                    <span className="SubTitle">실제 실무 문서에서 문제해결 과정과 개선점을 명확히 보고하는 연습</span>
                </S.TitleBox>
                <S.MiddleContainer>
                    <CategoryBox category={0}/>
                    <S.Word>{talk}</S.Word>
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
