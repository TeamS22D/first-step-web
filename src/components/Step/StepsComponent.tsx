import { useEffect, useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import * as S from "./StepsComponent.style";
import { useParams } from 'react-router-dom';

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


export default function StepsComponent({ step }: StepsComponentProps) {

    const categoryList = ["문서", "메일", "채팅"];
    const [category, setCategory] = useState(categoryList[0]);

    const [stepLabels, setStepLabels] = useState([
    `${category} 실습`,
    "AI 피드백",
    "미션 완료",
    ]);

    const { userParams } = useParams();

    // useEffect(() => {
    //     scrollToBottom();
    // }, [userParams]);

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

