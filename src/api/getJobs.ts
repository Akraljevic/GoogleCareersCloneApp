import axios from "axios";
import { JobInterface } from "@/api/types";
const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<JobInterface[]>(`${baseUrl}/jobs`);
  return response.data;
};

export default getJobs;

export const getJobsRapid = async () => {
  const rapidApiKey = process.env.JSEARCH_API_KEY;
  const rapidUrl = process.env.JSEARCH_API_URL;
  try {
    const response = await axios.get<JobInterface[]>(rapidUrl, {
      headers: {
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        "X-RapidAPI-Key": rapidApiKey, // Pass API key in the header
      },
      params: {
        query: "Software Engineer",
        location: "remote",
        page: 1,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs from RapidAPI:", error);
    return [];
  }
};
