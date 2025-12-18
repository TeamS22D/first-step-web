import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "./axiosInstance";
import axios from "axios";


export interface ChatMissionResponse {
    description: string;
    ai_persona: any;
    chatMissionId: number,
    chatContent: string | null;
    sendAt: string | null;
    isSend: boolean;
    userMissionId: number;
  }
  

export interface MissionResponse {
    id: number;
    missionName: string;
    description: string;
    situation: string;
    tip: string;
    requirement: string;
    missionTheme: "email" | "document" | "chat";
    ai_persona: {
        name: string;
        role: string;
        character: string;
    },
}


export const getChatMission = async (chatMissionId: number) => {
    const res = await axiosInstance.get(`/user-mission/mission/${chatMissionId}`);
    console.log("user", res);
    return res.data;
}

export const getMission = async (templateId: number) => {
    const res = await axiosInstance.get(`/user-mission/mission/${templateId}`);
    console.log("mission", res);
    return res.data;
}


export const useChatMission = () => {
    const { chatMissionId } = useParams();

    const [chatMission, setChatMission] =
    useState<ChatMissionResponse | null>(null);
    const [mission, setMission] =
    useState<MissionResponse | null>(null);
    
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchAll = async () => {
            console.log("현재 URL 파라미터:", chatMissionId); // 이게 undefined면 라우터 설정 문제
            if (!chatMissionId) return;
    
            try {
                setLoading(true);
                
                // 실제 변수에 담긴 값을 직접 확인하세요
                const chatData = await getChatMission(Number(chatMissionId));
                console.log("1. API에서 받은 원본 채팅 데이터:", chatData);
                setChatMission(chatData);
    
                const missionData = await getMission(Number(chatMissionId));
                console.log("2. API에서 받은 원본 미션 데이터:", missionData);
                setMission(missionData);
                
            } catch (error) {
                console.error("3. API 요청 실패:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, [chatMissionId]);    
    return{
        chatMission, // `/chat-mission/${chatMissionId}
        mission,
        loading,
    }
}