import axios from "axios";
import { JobInterface } from "@/api/types";
const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<JobInterface[]>(`${baseUrl}/jobs`);
  return response.data;
};

export default getJobs;
