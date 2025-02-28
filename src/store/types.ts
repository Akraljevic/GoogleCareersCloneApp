import { JobInterface, Degrees } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: JobInterface[];
  degrees: Degrees[];
  skillsSearchTerm: string;
  locationSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
