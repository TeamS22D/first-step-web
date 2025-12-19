import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import * as S from './MissionFeedback.style.ts';
import Graph from "../../components/Graph";
import StepsComponent from '../../../../components/Step/StepsComponent.tsx'
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import StarOff from '@assets/Mission/Feedback/StarOff.png';
import StarOn from '@assets/Mission/Feedback/StarOn.png';
import { useParams } from "react-router-dom";
import { getFeedbackData, userMission, type FeedbackData } from "@/hooks/missionFeedbackApi.ts";
import { getUserMission, type MissionResponse } from "@/hooks/mailApi.ts";


interface ImageProps {
    src: string;
    alt: string;
}


const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src = {src} alt={alt} />
    )
}


// 1. 타입 정의
type MissionTheme = 'document' | 'chat' | 'mail';

export function TitleBox({ data }: { data?: any }) { // 임시로 any, 실제로는 MissionResponse
  if (!data?.mission) return null;

  // 2. 간단한 매핑 객체 (상태값 대신 변수 사용)
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


export function MiddleBox({ data }: { data?: FeedbackData }) {

  const [grade, setGrade] = useState<number>(0);

  useEffect(() => {
    if (data?.grade.startsWith('A')) setGrade(5);
    else if (data?.grade.startsWith('B')) setGrade(4);
    else if (data?.grade.startsWith('C')) setGrade(3);
    else if (data?.grade.startsWith('D')) setGrade(2);
    else if (data?.grade.startsWith('E')) setGrade(1);
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
  const location = useLocation();

  const navigate = useNavigate()
  const { userMissionId } = useParams<{ userMissionId: string }>();

      const [mission, setMission] = useState<FeedbackData | null>(null);
      const [titleData, setTitleData] = useState<MissionResponse | null>(null)
      
      // useEffect(() => {
      //     if (!userMissionId) return console.log('userMissionId 없음');
        
      //     const fetchOrCreate = async () => {
      //       try {
      //         const data = await getFeedbackData(Number(userMissionId));
      //         console.log(userMissionId)
      //         setMission(data);

      //         const missionData = await getUserMission(Number(userMissionId))
      //         console.log('미션 데이터',missionData)
      //         setTitleData(missionData)
      //         console.log('확인 필요',titleData)
      //       } catch (err: any) {
      //         console.log('err')
      //       }
      //     };
        
      //     fetchOrCreate();
      //   }, [userMissionId]);
      useEffect(() => {
        if (!userMissionId) {
          console.warn('userMissionId 없음');
          return;
        }
      
        const fetchOrCreate = async () => {
          try {
            // 1. 병렬 처리를 통해 로딩 속도 최적화
            const [feedbackData, missionData] = await Promise.all([
              getFeedbackData(Number(userMissionId)),
              getUserMission(Number(userMissionId))
            ]);
      
            // 2. 상태 업데이트
            setMission(feedbackData);
            setTitleData(missionData);
      
            // 3. 로그 확인 (상태 변수가 아닌 직접 가져온 데이터 사용)
            console.log('가져온 미션 데이터:', missionData);
            
          } catch (err: any) {
            console.error('데이터를 불러오는 중 오류 발생:', err);
          }
        };
      
        fetchOrCreate();
      }, [userMissionId]);
      
      // 4. titleData가 실제로 바뀌었는지 감시하고 싶을 때 (선택 사항)
      useEffect(() => {
        if (titleData) {
          console.log('titleData 상태 업데이트 완료:', titleData);
        }
      }, [titleData]);
  

  const pageMove = () => {
    if (location.pathname.includes("user-mission/feedback")) {
      navigate('/missioncomplete')
    } else {
      navigate('/feedback')
    }
  }

 
  const feedback = mission

  useEffect(() => {
      console.log("feedback:", feedback);
  }, [feedback]);



  return (

    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <S.Container>
              {location.pathname.includes("user-mission/feedback") ? <S.TopContainer>
                  <StepsComponent step={1}/>
              </S.TopContainer> : null}
                <S.Body>
                  <TitleBox data = {titleData}/>
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

