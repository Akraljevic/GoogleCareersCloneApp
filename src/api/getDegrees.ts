import axios from "axios";

import { Degrees } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get<Degrees[]>(`${baseUrl}/degrees`);
  return response.data;
};

export default getDegrees;
