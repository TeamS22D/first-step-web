import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./axiosInstance";

export interface DocumentMissionResponse {
    documentMissionId: number,
    documentContent: string,
    sendAt: Date,
    isSend: boolean,
    userMissionId: number
}

// userMission
export interface UserMissionResponse {
    userMissionId: number;
    missionId?: number;
    mission?: {
      missionId: number;
      missionName: string;
    };
    missionName: string;
    missionTheme: "email" | "chat" | "document";
    startDate: string;
    endDate: string;
  }
  
  // mission
  export interface MissionResponse {
    tip: any;
    requirement: any;
    missionName: string;
    missionTheme: "email" | "document" | "chat";
    body: string;
    situation: string;
    description: string;
    referenceAnswer: string;
    rubricId: number;
  }
  
// api
export const getDocumentMission = async (documentMissionId: number) => {
  const res = await axiosInstance.get(`/document-mission/${documentMissionId}`);
  console.log("document", res);
  return res.data;
};

export const getUserMission = async (userMissionId: number) => {
  const res = await axiosInstance.get(`/user-mission/mission/${userMissionId}`);
  console.log("user", res);
  return res.data;
};

export const getMission = async (missionId: number) => {
  const res = await axiosInstance.get(`/mission/${missionId}`);
  console.log("mission", res);
  return res.data;
};


// hook
export const useDocumentMission = () => {
  const { documentMissionId } = useParams();

  const [documentMission, setDocumentMission] =
    useState<DocumentMissionResponse | null>(null);
  const [userMission, setUserMission] =
    useState<UserMissionResponse | null>(null);
  const [mission, setMission] =
    useState<any | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      if (!documentMissionId) return;

      try {
        setLoading(true);

        const document = await getDocumentMission(Number(documentMissionId));
        setDocumentMission(document);

        const userMissionData = await getUserMission(Number(document.userMissionId));
        setUserMission(userMissionData);

        if (userMissionData && userMissionData.missionId) {
          const missionData = await getMission(Number(userMissionData.missionId));
          setMission(missionData);
        }

      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [documentMissionId]);

  return {
    documentMission,
    userMission,
    mission,
    loading,
  };
};
