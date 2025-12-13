import { GlobalStyle } from "../../styles/GlobalStyle";
import * as S from "./StepsComponent.style";

interface StepsComponentProps {
    step: number;  
}

interface IconProps {
    src: string;
    alt: string;
}

const Icon = ({ src, alt }: IconProps) => {
    return <S.Icon src={src} alt={alt} />;
};

const stepLabels = ["채팅 실습", "AI 피드백", "미션 완료"];

export default function StepsComponent({ step }: StepsComponentProps) {
    return (
        <>
            <GlobalStyle />
            <S.Steps>
                {stepLabels.map((label, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center" }}>
                        <S.Step on={step === i}>{label}</S.Step>
                        {i < stepLabels.length - 1 && (
                            <>
                                <S.gongback/>
                                <Icon src="/assets/Mission/Step.png" alt="IconStep" />
                            </>
                        )}
                    </span>
                ))}
            </S.Steps>
        </>
    );
}

