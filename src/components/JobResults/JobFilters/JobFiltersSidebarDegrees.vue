<template>
  <job-filters-sidbear-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueDegrees } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/constants";
import JobFiltersSidbearCheckboxGroup from "./JobFiltersSidbearCheckboxGroup.vue";
export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidbearCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();
    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>
