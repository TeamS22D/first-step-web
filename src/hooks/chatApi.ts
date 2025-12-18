import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "./axiosInstance";
import axios from "axios";


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

const chatServerUrl: string = 'https://f79028ac5362.ngrok-free.app/'

export const getChatMission = async (chatMissionId: number) => {
    const res = await axios.get(`${chatServerUrl}performance/chat-mission/${chatMissionId}`,
        {
            withCredentials: false,
            headers: {
                'ngrok-skip-browser-warning': 'true', 
            }
        }
    );
    console.log("chat", res);
    return res.data;
}

export const getMission = async (templateId: number) => {
    const res = await axios.get(`${chatServerUrl}performance/chat-mission/template/${templateId}`,
        {
            withCredentials: false,
            headers: {
                'ngrok-skip-browser-warning': 'true',  
            }
        }
    );
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