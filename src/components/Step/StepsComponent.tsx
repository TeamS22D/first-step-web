import { GlobalStyle } from "../../styles/GlobalStyle";
import * as S from './StepsComponent';

interface IconProps {
    src: string;
    alt: string;
}


const Icon = ({src, alt}:IconProps) => {
    return (
        <S.Icon src={src} alt={alt} />
    )
}


function StepsComponent() {
    
    return (
        <>
            <GlobalStyle/>
            <S.Steps>
                <S.Step color='#3FB98A' style={{color:'#FFFFFF'}}>보고서 실습</S.Step>
                <Icon src="/assets/Mission/Step.png" alt="IconStep"/>
                <S.Step>AI 피드백</S.Step>
                <Icon src="/assets/Mission/Step.png" alt="IconStep"/>
                <S.Step>미션 완료</S.Step>
            </S.Steps>
        </>
    )

}

export default StepsComponent;