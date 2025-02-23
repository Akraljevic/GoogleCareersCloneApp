<template>
  <job-filters-sidbear-checkbox-group
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script>
import JobFiltersSidbearCheckboxGroup from "./JobFiltersSidbearCheckboxGroup.vue";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    JobFiltersSidbearCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    return {
      uniqueJobTypes,
      ADD_SELECTED_JOB_TYPES,
    };
  },
};
</script>
