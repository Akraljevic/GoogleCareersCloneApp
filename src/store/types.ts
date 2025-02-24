import { JobInterface, Degrees } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: JobInterface[];
  degrees: Degrees[];
  skillsSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
