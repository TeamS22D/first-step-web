import * as S from './Mail.style'
import type {EmailMissionResponse } from "../../../../../hooks/mailApi";
import { getEmailMission} from "../../../../../hooks/mailApi";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TopTextareaProps {
    title: string;
    placeholder: string;
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => void;    
    readOnly?: boolean;
  }
export function TopTextarea({
    title,
    placeholder,
    value,
    onChange,
    readOnly,
}: TopTextareaProps) 
{
    return (
      <S.TopTextarea>
        <S.Title>{title}</S.Title>
        <S.TopContent>
          <S.Content
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
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

  
    useEffect(() => {
      if (!emailMissionId) return;
  
      getEmailMission(Number(emailMissionId))
        .then((data) => {setMission(data)
          console.log(data)
          // mission.usermissionID
        }
      )
        .catch(() => {
          setError("이메일 미션을 찾을 수 없습니다.");
        })
        .finally(() => setLoading(false));
    }, [emailMissionId]);

    
  
    if (loading) return <div>불러오는 중...</div>;
    if (error) return <div>{error}</div>;
    if (!mission) return null;

    const [receiver, setReceiver] = useState(mission.receiver);
    const [title, setTitle] = useState(mission.title);
    const [emailContent, setEmailContent] = useState(mission.emailContent);

    

    return (
        <S.Body>
            <S.Container>
                <S.Wrapper>
                    <S.Topbar>
                        새 메일
                    </S.Topbar>
                    <form>
                        <TopTextarea title = '받는 사람' placeholder = '받는 이를 입력하세요.'
                        value={mission.receiver}
                        />
                        <TopTextarea title = '제목' placeholder = '제목을 입력하세요.'
                            value={mission.title}
                        />
                        <S.BottomTextarea>
                            <S.ContentBig
                                placeholder="내용을 입력하세요."
                                value={mission.emailContent}
                            />
                        </S.BottomTextarea>
                    </form>
                </S.Wrapper>
            </S.Container>
        </S.Body>
    )
}



