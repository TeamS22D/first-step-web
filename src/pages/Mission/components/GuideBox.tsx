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

const talk: string = '당신은 지금 3개월차 백엔드 개발자로서, ‘소셜 로그인 기능 개발’을 맡고 있습니다. 현재 진척도는 60%입니다. 다음 주 수요일, 도저히 미룰 수 없는 종합 건강검진 때문에 하루 연차가 필요합니다. 문제는 당신의 작업이 끝나야 동료 ‘이서준’이 후속 작업을 시작할 수 있자는 점입니다. 팀장 ‘민팀장’님께 연차 승인을 받으면서도, 팀의 스프린트 일정에 차질이 없도록 하겠다는 구체적인 계획을 제시하여 신뢰를 보여주세요!'
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
