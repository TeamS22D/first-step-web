import axiosInstance from "./axiosInstance";

export interface EmailMissionResponse {
  emailMissionId: number;
  title: string;
  emailContent: string;
  sendAt: string | null;
}

export const getEmailMission = async (
  Id: number
): Promise<EmailMissionResponse> => {
  const res = await axiosInstance.get(
    `/mission/${Id}`
  );
  return res.data;
};
