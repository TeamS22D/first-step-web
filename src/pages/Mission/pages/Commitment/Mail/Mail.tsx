import * as S from './Mail.style'
import type {EmailMissionResponse } from "../../../../../hooks/mailApi";
import { getEmailMission} from "../../../../../hooks/mailApi";
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MissionFeedbackContext } from '@/components/MissionLayout/MissionLayout';
import axiosInstance from '@/hooks/axiosInstance';

interface TopTextareaProps {
    name: string;
    title: string;
    placeholder: string;
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => void;    
  }
export function TopTextarea({
    title,
    placeholder,
    value,
    name,
    onChange,
}: TopTextareaProps) 
{
    return (
      <S.TopTextarea>
        <S.Title>{title}</S.Title>
        <S.TopContent>
          <S.Content
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </S.TopContent>
      </S.TopTextarea>
    );
  }

export default function Mail() {

    const { emailMissionId } = useParams<{ emailMissionId: string }>();

    const [mission, setMission] = useState<EmailMissionResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // input & textarea useState 관리
    const [text, setText] = useState({
      receiver: '',
      title: '',
      emailContent: ''
    })

    const textRef = useRef(text);

    useEffect(() => {
      textRef.current = text;
    }, [text]);

    // 제출 버튼
    const ctx = useContext(MissionFeedbackContext);

    const handleSubmit = useCallback(async () => {
      const res = await axiosInstance.post(
        `/email-mission/send/${emailMissionId}`,
        {
          receiver: textRef.current.receiver,
          title: textRef.current.title,
          emailContent: textRef.current.emailContent,
        }
      );
    
      console.log(res.data);
      alert('제출');
    }, [emailMissionId]);
    
    useEffect(() => {
      if (!ctx) return;
      ctx.setButtonSubmitAction(() => handleSubmit);
    }, [ctx, handleSubmit]);
        
    // 저장 버튼

    const handleSave = useCallback(async () => {
      const res = await axiosInstance.patch(
        `/email-mission/save/${emailMissionId}`,
        {
          receiver: textRef.current.receiver,
          title: textRef.current.title,
          emailContent: textRef.current.emailContent,
        }
      );
    
      console.log(res.data);
      alert('저장');
    }, [emailMissionId]);


    useEffect(() => {
      if (!ctx) return;
      ctx.setButtonSaveAction(() => handleSave);
    }, [ctx, handleSave]);


    // emailMissionId data 받기
    useEffect(() => {
      if (!emailMissionId) return;
    
      const fetchOrCreate = async () => {
        try {
          const data = await getEmailMission(Number(emailMissionId));
          setMission(data);
        } catch (err: any) {

          // 400 -> 미션을 처음 열었을 때
          if (err.response?.status === 400) {
            const res = await axiosInstance.post(
              `/email-mission/create`,
              {
                title: '',
                receiver: '',
                emailContent: '',
                userMissionId: 2, 
              }
            );
    
            setMission(res.data);
          } else {
            setError("이메일 미션을 불러올 수 없습니다.");
          }
        } finally {
          setLoading(false);
        }
      };
    
      fetchOrCreate();
    }, [emailMissionId]);

    useEffect(() => {
      if (!mission) return;
    
      setText({
        receiver: mission.receiver ?? '',
        title: mission.title ?? '',
        emailContent: mission.emailContent ?? '',
      });
    }, [mission]);
    
    // input 
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setText(prev => ({ ...prev, [name]: value }));
    };
    
  
    // 에러 또는 로딩
    if (loading) return <div>불러오는 중...</div>;
    if (error) return <div>{error}</div>;
    if (!mission) return null;



    return (
        <S.Body>
            <S.Container>
                <S.Wrapper>
                    <S.Topbar>
                        새 메일
                    </S.Topbar>
                    <form>
                        <TopTextarea title = '받는 사람' placeholder = '받는 이를 입력하세요.'
                        name = 'receiver'
                        value={text.receiver}
                        onChange={handleInputChange}
                        />
                        <TopTextarea title = '제목' placeholder = '제목을 입력하세요.'
                            value={text.title}
                            onChange={handleInputChange}
                            name = 'title'
                        />
                        <S.BottomTextarea>
                            <S.ContentBig
                                placeholder="내용을 입력하세요."
                                value={text.emailContent}
                                onChange={handleInputChange}
                                name = 'emailContent'
                            />
                        </S.BottomTextarea>
                    </form>
                </S.Wrapper>
            </S.Container>
        </S.Body>
    )
}



