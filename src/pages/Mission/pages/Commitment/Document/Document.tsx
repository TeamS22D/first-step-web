import { useNavigate, useParams } from 'react-router';
import Markdown from './components/Markdown/Markdown'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useDocumentMission } from '@/hooks/documentApi';
import axiosInstance from '@/hooks/axiosInstance';
import { MissionFeedbackContext } from '@/components/MissionLayout/MissionLayout';
import { getFeedbackData } from '@/hooks/missionFeedbackApi';

// MissionFeedbackContext  

export default function Document() {
    const [markdown, setMarkdown] = useState<string>('');
    const markdownRef = useRef(markdown);
    const navigate = useNavigate()
  
    useEffect(() => {
      markdownRef.current = markdown;
    }, [markdown]);

    const { documentMissionId } = useParams<{ documentMissionId: string }>();


  // 데이터 전달
    const { documentMission, loading } = useDocumentMission();
    
    const [error, setError] = useState<string | null>(null);
    const [localMission, setLocalMission] = useState(documentMission);

    
    useEffect(() => {
        if (!loading && !documentMission) {
            const createDocument = async () => {
                try {
                    const res = await axiosInstance.post(
                        `/document-mission/create`,
                        {
                            documentContent: '새로 만듦',
                            userMissionId: 2, 
                        }
                    );
                    setLocalMission(res.data);
                } catch (err) {
                    setError("문서 미션을 생성하거나 불러올 수 없습니다.");
                }
            };
            createDocument();
        } else if (documentMission) {
            setLocalMission(documentMission);
        }
    }, [loading, documentMission, documentMissionId]);


    useEffect(() => {
        if (localMission) {
          setMarkdown(localMission.documentContent);
        }
      }, [localMission]);
      
      const ctx = useContext(MissionFeedbackContext);

    // 제출 
    const handleSubmit = useCallback(async () => {
        if (!localMission) return;
    
        console.log('제출 누름')
        const res = await axiosInstance.post(
          `/document-mission/send/${documentMissionId}`,
          {
            documentContent: markdownRef.current,
          }
        );
        console.log(res.data);
        alert('제출');

        console.log('확인',localMission.userMissionId)
        getFeedbackData(Number(localMission.userMissionId))
        navigate(`/user-mission/feedback/${localMission.userMissionId}`)
        

      }, [documentMissionId, localMission]);
    
      useEffect(() => {
        if (!ctx) return;
        ctx.setButtonSubmitAction(() => handleSubmit);
      }, [ctx, handleSubmit]);

  // 저장


    const handleSave = useCallback(async () => {
        console.log('저장 누름')
        const res = await axiosInstance.patch(
        `/document-mission/save/${documentMissionId}`,
        {
            documentContent: markdownRef.current,
        }
        );
        console.log(res.data);
        alert('저장');
    }, [documentMissionId]);

    useEffect(() => {
        if (!ctx) return;
        ctx.setButtonSaveAction(() => handleSave);
    }, [ctx, handleSave]);




    if (loading && !localMission) return <div>불러오는 중...</div>;
    if (error) return <div>{error}</div>;
    if (!localMission) return null;


    


    return(
        <>
            <Markdown
                markdown={markdown}
                onChange={setMarkdown}
            />
        </>
    )
}