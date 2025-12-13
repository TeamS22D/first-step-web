import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import * as S from './MissionFeedback.style.ts';
import Graph from "../../components/Graph";
import StepsComponent from '../../../../components/Step/StepsComponent.tsx'
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import StarOff from '@assets/Mission/StarOff.png';
import StarOn from '@assets/Mission/StarOn.png';


interface ImageProps {
    src: string;
    alt: string;
}


const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src = {src} alt={alt} />
    )
}

export interface EvaluationDetail {
    good_points: string;
    improvement_points: string;
    suggested_fix: string;
}

export interface EvaluationItem {
    item: string;
    score: number;
    feedback: EvaluationDetail;

}

export interface FeedbackData {
    evaluations: EvaluationItem[];
    total_score: number;
    grade: string;
    general_feedback: string;
}

const titleInfo = {
  mainTitle: "[보고서] 업무 보고서 작성",
  period: "9일 전",
  date: "2024-11-04",
  target: "다른 회사로부터 외주 개발 프로젝트를 더 예의있게 보내는 실습"
};

export function TitleBox() {
  return (
    <S.TitleBox>
      <S.TitleTopContainer>
        <S.TitleText>{titleInfo.mainTitle}</S.TitleText>
        <S.period>{titleInfo.period}</S.period>
      </S.TitleTopContainer>
      <S.TitleBottomContainer>
        <span className="date">{titleInfo.date}</span>
        <span>|</span>
        <span>{titleInfo.target}</span>
      </S.TitleBottomContainer>
    </S.TitleBox>
  )
}



export function MiddleBox({ data }: { data?: FeedbackData }) {

  const [grade, setGrade] = useState<number>(0);

  useEffect(() => {
    if (data?.grade === 'A') setGrade(5);
    else if (data?.grade === 'B') setGrade(4);
    else if (data?.grade === 'C') setGrade(3);
    else if (data?.grade === 'D') setGrade(2);
    else if (data?.grade === 'E') setGrade(1);
    else setGrade(0);
  }, [data]);
  

  return (
    <S.MiddleContainer>
      <S.MiddleGraph>
        <Graph dataProps={data} />
      </S.MiddleGraph>
      <S.MiddleEvaluation>
        <S.MiddleRatingContainer>
          <S.MiddleRatingContainerStars>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Image
              key={idx}
              src={idx < grade ? StarOn : StarOff}
              alt=""
            />
          ))}
          </S.MiddleRatingContainerStars>
          <S.MiddleRatingContainerScore>
          {`${data?.total_score}점`}
          </S.MiddleRatingContainerScore>
        </S.MiddleRatingContainer>
        <S.MiddleRatingTextareaContainer>
          <S.MiddleRatingTextarea>{data?.general_feedback}</S.MiddleRatingTextarea>
        </S.MiddleRatingTextareaContainer>
      </S.MiddleEvaluation>
    </S.MiddleContainer>
  )
}

interface BottomHelpProps {
  title: string | undefined;
  content: string | undefined;
}
export function BottomHelp({ title, content }: BottomHelpProps) {
  return (
    // 잘한 점 | 보완할 점
    <S.BottomHelf>
      <div className="TitleContainer">
        <div className="Title">{title}</div>
      </div>
      <div className="Textarea">{content}</div>
    </S.BottomHelf>
  )
}

interface BottomRightAreaItemProps {
  title: string | undefined;
  sub: string | undefined;
  color: string | undefined;
}
function BottomRightAreaItem({ title, sub, color }: BottomRightAreaItemProps) {
  return (
    // 세부 영역별 피드백
    <S.BottomRightAreaItem>
      <S.Bar color= {color} />
      <S.ItemContent>
        <S.Title>{title}</S.Title>
        <S.Sub>{sub}</S.Sub>
      </S.ItemContent>
    </S.BottomRightAreaItem>
  )
}

export function BottomBox({ data }: { data?: FeedbackData }) {
  return (
    <S.BottomContainer>

      <S.BottomLeftContainer>
        <BottomHelp
          title='잘한 점'
          content=
            {data?.evaluations.map((ev, idx) => (
              <>
                <span key={idx}>
                  - {ev.feedback.good_points}
                </span>
                <br/>
              </>
            ))} />

       <BottomHelp
          title='보완할 점'
          content=
            {data?.evaluations.map((ev, idx) => (
              <>
                <span key={idx}>
                  - {ev.feedback.suggested_fix}
                </span>
                <br/>
              </>
            ))} />

      </S.BottomLeftContainer>

      {/* 세부 항목별 피드백 */}
      <S.BottomRightArea>
      <S.BottomRightAreaContainer>
        {data?.evaluations.map((ev, idx) => (
          <BottomRightAreaItem
            key={idx}
            title={ev.item}
            sub={ev.feedback.improvement_points}
            color= {String(idx)}
          />
        ))}
      </S.BottomRightAreaContainer>
      </S.BottomRightArea>
    </S.BottomContainer>
  );
}


export default function MissionFeedback() {

  const navigate = useNavigate()

  const pageMove = () => {
    navigate('/missioncomplete')
  }

  const location = useLocation();
  const feedback = location.state?.feedback as FeedbackData | undefined;

  useEffect(() => {
      console.log("feedback:", feedback);
  }, [feedback]);


  return (

    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <S.Container>
              <S.TopContainer>
                  <StepsComponent step={1}/>
              </S.TopContainer>
                <S.Body>
                  <TitleBox />
                  <MiddleBox data={feedback} />
                  <BottomBox data={feedback} />
                  <S.buttoncontainer>
                    <S.backButton onClick={pageMove} >돌아가기</S.backButton>
                  </S.buttoncontainer>
                </S.Body>
          </S.Container>
          <S.gongback/> 
    </ThemeProvider>
  )
}

