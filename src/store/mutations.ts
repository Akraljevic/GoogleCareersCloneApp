import {
  RECIEVE_JOBS,
  CLEAR_FILTERS,
  RECIEVE_DEGREES,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
} from "@/store/constants";

import { GlobalState } from "./types";
import { JobInterface, Degrees } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state: GlobalState) {
    state.isLoggedIn = false;
  },
  [RECIEVE_JOBS](state: GlobalState, jobs: JobInterface[]) {
    state.jobs = jobs;
  },
  [RECIEVE_DEGREES](state: GlobalState, degrees: Degrees[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [CLEAR_FILTERS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
  },
};

export default mutations;
