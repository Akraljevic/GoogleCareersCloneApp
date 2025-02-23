<template>
  <job-filters-sidbear-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script>
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import JobFiltersSidbearCheckboxGroup from "./JobFiltersSidbearCheckboxGroup.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    JobFiltersSidbearCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();
    return {
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
};
</script>
