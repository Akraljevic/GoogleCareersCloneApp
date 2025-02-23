import { JobInterface, Degrees } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: JobInterface[];
  degrees: Degrees[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
