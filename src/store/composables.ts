import { computed } from "vue";
import { useStore } from "vuex";
import {
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS,
  FETCH_JOBS,
  FETCH_DEGREES,
  UNIQUE_DEGREES,
} from "./constants";

import { JobInterface } from "@/api/types";
import { key } from "@/store";
/* GETTERS */
export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<JobInterface[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};
export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
};
// export default { useFilteredJobs, useUniqueJobTypes, useUniqueOrganizations };

/* ACTIONS */
export const useFetchJobsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_JOBS);
};

export const useFetchDegreesDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_DEGREES);
};
