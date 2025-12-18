import axios from 'axios';

export interface MissionResponse {
  id: number;
  title: string;
  content: string;
}

export const getMissionById = async (id: number): Promise<MissionResponse> => {
  const response = await axios.get(`/mission/${id}`);
  
  return response.data;
};

