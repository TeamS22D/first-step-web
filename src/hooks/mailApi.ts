import axiosInstance from "./axiosInstance";

export interface EmailMissionResponse {
  emailMissionId: number;
  title: string;
  emailContent: string;
  sendAt: string | null;
}

export const getEmailMission = async (
  emailMissionId: number
): Promise<EmailMissionResponse> => {
  const res = await axiosInstance.get(
    `/email-mission/${emailMissionId}`
  );
  return res.data;
};

// export const getUserMission = async (
//   UserMissionId: number
// ): Promise<EmailMissionResponse> => {
//   const res = await axiosInstance.get(
//     `/email-mission/${UserMissionId}`
//   );
//   return res.data;
// };

// export const getMission = async (
//   missionId: number
// ): Promise<EmailMissionResponse> => {
//   const res = await axiosInstance.get(
//     `/email-mission/${missionId}`
//   );
//   return res.data;
// };
