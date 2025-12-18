import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "./axiosInstance";

// 메일
export interface EmailMissionResponse {
  emailMissionId: number;
  title: string;
  emailContent: string;
  sendAt: string | null;
  receiver?: string;
  userMissionId: number;
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
  mission: any;
  tip: string;
  requirement: string;
  missionName: string;
  missionTheme: "email" | "document" | "chat";
  body: string;
  situation: string;
  description: string;
  referenceAnswer: string;
  rubricId: number;
}

// api
export const getEmailMission = async (emailMissionId: number) => {
  const res = await axiosInstance.get(`/email-mission/${emailMissionId}`);
  console.log("email", res);
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
export const useMailMission = () => {
  const { emailMissionId } = useParams();

  const [emailMission, setEmailMission] =
    useState<EmailMissionResponse | null>(null);
  const [userMission, setUserMission] =
    useState<UserMissionResponse | null>(null);
  const [mission, setMission] =
    useState<MissionResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      if (!emailMissionId) return;

      try {
        setLoading(true);

        const email = await getEmailMission(Number(emailMissionId));
        setEmailMission(email);

        const userMission = await getUserMission(Number(email.userMissionId));
        setUserMission(userMission);

        const mission = await getMission(Number(userMission.mission.missionId));
        setMission(mission);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [emailMissionId]);

  return {
    emailMission,
    userMission,
    mission,
    loading,
  };
};
