import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "./axiosInstance";

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
    const res = await axiosInstance.get(`user-mission/feedback/${userMissionId}`)
    console.log('feedback', res)
    return res.data
}

