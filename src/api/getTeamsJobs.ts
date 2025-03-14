import axios from "axios";

import { Team } from "@/api/types";

const getTeamsJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<Team[]>(`${baseUrl}/teams`);
  return response.data;
};

export default getTeamsJobs;
