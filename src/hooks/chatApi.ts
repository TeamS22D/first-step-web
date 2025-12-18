import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "./axiosInstance";


export interface ChatMissionResponse {
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
    const res = await axiosInstance.get(`chat-mission/${chatMissionId}`);
    console.log("chat", res);
    return res.data;
}

export const getMission = async (templateId: number) => {
    const res = await axiosInstance.get(`chat-mission/template/${templateId}`);
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
        if (!chatMissionId) return;

        try {
            setLoading(true)

            const chat = await getChatMission(Number(chatMissionId));
            setChatMission(chat)

            const mission = await getMission(Number(chatMissionId));
            setMission(mission)
            
        } finally {
            setLoading(false)
        }

        };

        fetchAll();

    }, [chatMissionId]);

    return{
        chatMission,
        mission,
        loading,
    }
}