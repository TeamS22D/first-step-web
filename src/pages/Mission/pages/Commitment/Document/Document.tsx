import { useParams } from 'react-router';
import * as S from './Document.style'
import Markdown from './components/Markdown/Markdown'
import { useEffect, useState } from 'react';
import { useDocumentMission } from '@/hooks/documentApi';
import axiosInstance from '@/hooks/axiosInstance';

export default function Document() {

    const { documentMissionId } = useParams<{ documentMissionId: string }>();
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
    
    if (loading && !localMission) return <div>불러오는 중...</div>;
    if (error) return <div>{error}</div>;
    if (!localMission) return null;


    return(
        <>
            <Markdown/>
        </>
    )
}