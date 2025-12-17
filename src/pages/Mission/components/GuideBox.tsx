import { GlobalStyle } from "@/styles/GlobalStyle";
import * as S from '../styles/GuideBox';
import ImageFirm from '@/assets/Mission/GuideBox/HintFirm.png'
import IconAdvice from '@/assets/Mission/GuideBox/Advice.png'
import {useState } from "react";
import { useMission } from "@/hooks/mailApi";


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
    setCategory: (value: number) => void;
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

const stepLabels = ["상황설명", "요청사항", "상사의 말"];

const firm: string = '처음 써보는 거라 잘 모르겠지? 필요하다면 힌트를 줄게요.'

export function CategoryBox({ category, setCategory }: CategoryProps) {
  return (
    <S.categoryContainer>
      {stepLabels.map((label, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center" }}>
          <S.category
            on={category === i}
            onClick={() => setCategory(i)}
          >
            {label}
          </S.category>
        </span>
      ))}
    </S.categoryContainer>
  );
}

export default function GuideBox() {
    const [category, setCategory] = useState(0);
  
    const { mission, loading } = useMission();

    if (loading) return <div>로딩중...</div>;
    if (!mission) return null;

    const missions = mission;
  
    const writing =
      category === 0
        ? missions.situation
        : category === 1
        ? missions.requirement
        : missions.tip;
    
    const theme:string = 
     missions.missionTheme === 'chat'
      ? '채팅'
      : missions.missionTheme === 'document'
      ? '문서'
      : missions.missionTheme === 'email'
      ? '메일'
      :'';
    

    return (
      <>
        <GlobalStyle />
        <S.guideContainer>
          <S.TitleBox>
            <span className="Title">{`[${theme}] ${missions.missionName}`}</span>
            <span className="SubTitle">
            {missions.description}
            </span>
          </S.TitleBox>
  
          <S.MiddleContainer>
            <CategoryBox
              category={category}
              setCategory={setCategory}
            />
            <S.Word>{writing}</S.Word>
          </S.MiddleContainer>
  

            <S.BottomBox>
              <S.BottomBoxTitle>
                <Icon src={IconAdvice} alt="" />
                상사의 조언
              </S.BottomBoxTitle>
              <S.Speech>{firm}</S.Speech>
              <Image src={ImageFirm} alt="" />
            </S.BottomBox>

        </S.guideContainer>
      </>
    );
  }
  