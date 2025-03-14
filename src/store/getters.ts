import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_DEGREE,
  INCLUDE_JOB_BY_SKILL,
  INCLUDE_JOB_BY_LOCATION,
} from "@/store/constants";

import { GlobalState } from "./types";
import { JobInterface } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: JobInterface) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: JobInterface) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: JobInterface) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: JobInterface) => boolean;
  INCLUDE_JOB_BY_LOCATION: (job: JobInterface) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [UNIQUE_DEGREES](state: GlobalState) {
    return state.degrees.map((degree) => degree.degree);
  },
  [INCLUDE_JOB_BY_ORGANIZATION]:
    (state: GlobalState) => (job: JobInterface) => {
      if (state.selectedOrganizations.length === 0) return true;
      return state.selectedOrganizations.includes(job.organization);
    },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: JobInterface) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [INCLUDE_JOB_BY_DEGREE]: (state: GlobalState) => (job: JobInterface) => {
    if (state.selectedDegrees.length === 0) return true;
    return state.selectedDegrees.includes(job.degree);
  },
  [INCLUDE_JOB_BY_SKILL]: (state: GlobalState) => (job: JobInterface) => {
    return job.title
      .toLowerCase()
      .includes(state.skillsSearchTerm.toLowerCase());
  },
  [INCLUDE_JOB_BY_LOCATION]: (state: GlobalState) => (job: JobInterface) => {
    return job.locations
      .join(" ")
      .toLowerCase()
      .includes(state.locationSearchTerm.toLowerCase());
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job))
      .filter((job) => getters.INCLUDE_JOB_BY_LOCATION(job));
  },
};

export default getters;
