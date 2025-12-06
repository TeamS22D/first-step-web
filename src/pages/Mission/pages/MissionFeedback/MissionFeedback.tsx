import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import * as S from './MissionFeedback.style.ts';
import Graph from "../../components/Graph";
import StepsComponent from '../../../../components/Step/StepsComponent.tsx'
import { useLocation } from "react-router";
import { useEffect } from "react";

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

const bottomLeftHelps = [
  {
    title: "잘한 점",
    content: "주어진 문제 상황의 내용을 올바르게 해결하였는지, 주어진 내용이 모두 있는지를 잘 검사하였습니다!"
  },
  {
    title: "잘한 점",
    content: "다른 내용 예시를 넣을 수 있습니다."
  }
];

const bottomRightItems = [
  { title: "맞춤법", sub: "위 상황에서는 어떡게가 아닌 어떻게의 표현이 더 적절한 표현입니다! 어떡게라는 표현은 존재하지 않습니다." },
  { title: "단어", sub: "좀 더 예의와 격식을 차리고 싶으시면 ‘진지’라는 단어도 추천드려요~!!" },
  { title: "구조 명확성", sub: "문서의 구조와 흐름이 명확하지 않아요.. 상대방이 좀 더 잘 알 수 있게 적어보아요!" }
];


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
  return (
    <S.MiddleContainer>
      <S.MiddleGraph>
        <Graph />
      </S.MiddleGraph>
      <S.MiddleEvaluation>
        <S.MiddleRatingContainer />
        <S.MiddleRatingTextarea>{data?.general_feedback}</S.MiddleRatingTextarea>
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
}
function BottomRightAreaItem({ title, sub }: BottomRightAreaItemProps) {
  return (
    // 세부 영역별 피드백
    <S.BottomRightAreaItem>
      <S.Bar />
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
        {data?.evaluations.map((ev, idx) => (
          <BottomHelp
            key={idx}
            title={ev.item}
            content={ev.feedback.good_points}
          />
        ))}
      </S.BottomLeftContainer>

      <S.BottomRightArea>
        <S.BottomRightAreaContainer>
          {data?.evaluations.map((ev, idx) => (
            <BottomRightAreaItem
              key={idx}
              title={ev.item}
              sub={ev.feedback.improvement_points}
            />
          ))}
        </S.BottomRightAreaContainer>
      </S.BottomRightArea>
    </S.BottomContainer>
  );
}

export default function MissionFeedback() {

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
                    <S.backButton>돌아가기</S.backButton>
                  </S.buttoncontainer>
                </S.Body>
          </S.Container>
          <S.gongback/> 
    </ThemeProvider>
  )
}

