import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// 스타일 및 테마
import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { lightTheme } from "../../../../theme/theme";
import * as S from './MissionFeedback.style.ts';

// 컴포넌트
import Graph from "../../components/Graph";
import StepsComponent from '../../../../components/Step/StepsComponent.tsx';

// 이미지
import StarOff from '@assets/Mission/Feedback/StarOff.png';
import StarOn from '@assets/Mission/Feedback/StarOn.png';

// API 및 타입 (외부 파일에서 가져온다고 가정하되, 이 파일 내에서 사용하기 위해 구조 유추)
import { getFeedbackData, type FeedbackData as ImportedFeedbackData } from "@/hooks/missionFeedbackApi.ts";
import { getUserMission, type MissionResponse as ImportedMissionResponse } from "@/hooks/mailApi.ts";

// ----------------------------------------------------------------------
// 1. 타입 정의 (외부에서 import 한 타입의 내부 구조가 불명확할 경우를 대비해 구체화)
// ----------------------------------------------------------------------

// API 응답 데이터 구조 (사용 코드를 기반으로 정의)
interface EvaluationItem {
  item: string;
  feedback: {
    good_points: string;
    suggested_fix: string;
    improvement_points: string;
  };
}

// 실제 사용되는 FeedbackData 확장/정의
interface FeedbackData extends ImportedFeedbackData {
  grade: string;
  total_score: number;
  general_feedback: string;
  evaluations: EvaluationItem[];
}

// 실제 사용되는 MissionResponse 확장/정의
interface MissionResponse extends ImportedMissionResponse {
  mission: {
    missionTheme: string;
    missionName: string;
    description: string;
    missionId: number | string;
  };
}

type MissionTheme = 'document' | 'chat' | 'mail';

interface ImageProps {
    src: string;
    alt: string;
}

interface BottomHelpProps {
  title: string;
  content: React.ReactNode; // 문자열뿐만 아니라 JSX(span 태그 등)를 받기 위해 변경
}

interface BottomRightAreaItemProps {
  title: string | undefined;
  sub: string | undefined;
  color: string | undefined;
}

interface TitleBoxProps {
    data: MissionResponse | null;
}

interface MiddleBoxProps {
    data: FeedbackData | null;
}

interface BottomBoxProps {
    data: FeedbackData | null;
}

// ----------------------------------------------------------------------
// 2. 하위 컴포넌트
// ----------------------------------------------------------------------

const Image = ({src, alt}: ImageProps) => {
    return (
        <S.Image src={src} alt={alt} />
    )
}

export function TitleBox({ data }: TitleBoxProps) {
  if (!data?.mission) return null;

  const themeMap: Record<MissionTheme, string> = {
    document: '문서',
    chat: '채팅',
    mail: '메일',
  };

  const themeLabel = themeMap[data.mission.missionTheme as MissionTheme] || '기타';

  return (
    <S.TitleBox>
      <S.TitleTopContainer>
        <S.TitleText>[{themeLabel}] {data.mission.missionName}</S.TitleText>
        <S.period>{data.mission.description}</S.period>
      </S.TitleTopContainer>
      <S.TitleBottomContainer>
        <span className="date">{data.mission.missionId}</span>
        <span>|</span>
        <span>{data.mission.missionName}</span>
      </S.TitleBottomContainer>
    </S.TitleBox>
  );
}

export function MiddleBox({ data }: MiddleBoxProps) {
  const [grade, setGrade] = useState<number>(0);

  useEffect(() => {
    if (!data?.grade) {
        setGrade(0);
        return;
    }
    if (data.grade.startsWith('A')) setGrade(5);
    else if (data.grade.startsWith('B')) setGrade(4);
    else if (data.grade.startsWith('C')) setGrade(3);
    else if (data.grade.startsWith('D')) setGrade(2);
    else if (data.grade.startsWith('E')) setGrade(1);
    else setGrade(0);
  }, [data]);
  
  return (
    <S.MiddleContainer>
      <S.MiddleGraph>
        {/* Graph 컴포넌트의 props 타입에 맞춰 전달 (data가 null일 경우 처리 필요) */}
        {data && <Graph dataProps={data} />}
      </S.MiddleGraph>
      <S.MiddleEvaluation>
        <S.MiddleRatingContainer>
          <S.MiddleRatingContainerStars>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Image
              key={idx}
              src={idx < grade ? StarOn : StarOff}
              alt="star"
            />
          ))}
          </S.MiddleRatingContainerStars>
          <S.MiddleRatingContainerScore>
          {data ? `${data.total_score}점` : '0점'}
          </S.MiddleRatingContainerScore>
        </S.MiddleRatingContainer>
        <S.MiddleRatingTextareaContainer>
          <S.MiddleRatingTextarea>
            {data?.general_feedback}
          </S.MiddleRatingTextarea>
        </S.MiddleRatingTextareaContainer>
      </S.MiddleEvaluation>
    </S.MiddleContainer>
  )
}

export function BottomHelp({ title, content }: BottomHelpProps) {
  return (
    <S.BottomHelf>
      <div className="TitleContainer">
        <div className="Title">{title}</div>
      </div>
      <div className="Textarea">{content}</div>
    </S.BottomHelf>
  )
}

function BottomRightAreaItem({ title, sub, color }: BottomRightAreaItemProps) {
  return (
    <S.BottomRightAreaItem>
      <S.Bar color={color} />
      <S.ItemContent>
        <S.Title>{title}</S.Title>
        <S.Sub>{sub}</S.Sub>
      </S.ItemContent>
    </S.BottomRightAreaItem>
  )
}

export function BottomBox({ data }: BottomBoxProps) {
  return (
    <S.BottomContainer>
      <S.BottomLeftContainer>
        <BottomHelp
          title='잘한 점'
          content={
            data?.evaluations.map((ev, idx) => (
              <React.Fragment key={idx}>
                <span>- {ev.feedback.good_points}</span>
                <br/>
              </React.Fragment>
            ))
          } 
        />

       <BottomHelp
          title='보완할 점'
          content={
            data?.evaluations.map((ev, idx) => (
              <React.Fragment key={idx}>
                <span>- {ev.feedback.suggested_fix}</span>
                <br/>
              </React.Fragment>
            ))
          } 
        />
      </S.BottomLeftContainer>

      {/* 세부 항목별 피드백 */}
      <S.BottomRightArea>
      <S.BottomRightAreaContainer>
        {data?.evaluations.map((ev, idx) => (
          <BottomRightAreaItem
            key={idx}
            title={ev.item}
            sub={ev.feedback.improvement_points}
            color={String(idx)}
          />
        ))}
      </S.BottomRightAreaContainer>
      </S.BottomRightArea>
    </S.BottomContainer>
  );
}

// ----------------------------------------------------------------------
// 3. 메인 페이지 컴포넌트
// ----------------------------------------------------------------------

export default function MissionFeedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userMissionId } = useParams<{ userMissionId: string }>();

  // State에 제네릭 타입 명시
  const [mission, setMission] = useState<FeedbackData | null>(null);
  const [titleData, setTitleData] = useState<MissionResponse | null>(null);
      
  useEffect(() => {
    if (!userMissionId) {
      console.warn('userMissionId 없음');
      return;
    }
  
    const fetchOrCreate = async () => {
      try {
        // 병렬 처리를 통해 데이터 로딩
        // Promise.all의 결과 타입을 명시적으로 단언(assertion)하여 타입 안전성 확보
        const [feedbackData, missionData] = await Promise.all([
          getFeedbackData(Number(userMissionId)),
          getUserMission(Number(userMissionId))
        ]);
  
        setMission(feedbackData as FeedbackData);
        setTitleData(missionData as MissionResponse);
  
        console.log('가져온 미션 데이터:', missionData);
        
      } catch (err: any) {
        console.error('데이터를 불러오는 중 오류 발생:', err);
      }
    };
  
    fetchOrCreate();
  }, [userMissionId]);
      
  useEffect(() => {
    if (titleData) {
      console.log('titleData 상태 업데이트 완료:', titleData);
    }
  }, [titleData]);
  

  const pageMove = useCallback(() => {
    if (location.pathname.includes("user-mission/feedback")) {
      navigate('/missioncomplete');
    } else {
      navigate('/feedback');
    }
  }, [location.pathname, navigate]);

 
  // const feedback = mission; // 굳이 변수 재할당 필요 없음

  useEffect(() => {
      console.log("feedback:", mission);
  }, [mission]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <S.Container>
              {location.pathname.includes("user-mission/feedback") ? (
                  <S.TopContainer>
                      <StepsComponent step={1}/>
                  </S.TopContainer>
              ) : null}
                <S.Body>
                  <TitleBox data={titleData} />
                  <MiddleBox data={mission} />
                  <BottomBox data={mission} />
                  <S.buttoncontainer>
                    <S.backButton onClick={pageMove}>돌아가기</S.backButton>
                  </S.buttoncontainer>
                </S.Body>
          </S.Container>
          <S.gongback/> 
    </ThemeProvider>
  )
}