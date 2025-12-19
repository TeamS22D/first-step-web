import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import axiosInstance from "./axiosInstance";
import type { MissionResponse, UserMissionResponse } from "./mailApi";

export interface EvaluationDetail {
    good_points: string;
    improvement_points: string;
    suggested_fix: string;
}

export interface EvaluationItem {
    item: string;
    score: number;
    feedback: EvaluationDetail;

}

export interface FeedbackData {
    evaluations: EvaluationItem[];
    total_score: number;
    grade: string;
    general_feedback: string;
}


export const getFeedbackData = async (userMissionId:number) => {
    console.log(userMissionId)
    const res = await axiosInstance.get(`user-mission/feedback/${userMissionId}`)
    console.log('feedback', res)
    return res.data
}

export const MissionFeedbackData = () => {
    const { userMissionId } = useParams();
    
    const [feedbackData, setFeedbackData] =
    useState<FeedbackData | null>(null);

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      if (!userMissionId) return;

      try {
        setLoading(true);

        const feedback = await getFeedbackData(Number(userMissionId));
        setFeedbackData(feedback);

      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [userMissionId]);

  return {
    userMissionId,
    loading,
    feedbackData,
  };
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

  export const userMission = () => {
    const { userMissionId } = useParams();
  
    const [userMission, setUserMission] =
      useState<UserMissionResponse | null>(null);
    const [mission, setMission] =
      useState<MissionResponse | null>(null);
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchAll = async () => {
        if (!userMissionId) return;
  
        try {
          setLoading(true);
    
          const userMission = await getUserMission(Number(userMissionId));
          setUserMission(userMission);
  
  
          const mission = await getMission(Number(userMission.mission.missionId));
          setMission(mission);
  
        } finally {
          setLoading(false);
        }
      };
  
      fetchAll();
    }, [userMissionId]);
  
    return {
      userMissionId,
      userMission,
      mission,
      loading,
    };
  };