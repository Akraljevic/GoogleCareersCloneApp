<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-grey-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useConfirmRoute } from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SubNav",
  setup() {
    const onJobResultsPage = useConfirmRoute("JobResults");
    const FILTERED_JOBS = useFilteredJobs();
    return { onJobResultsPage, FILTERED_JOBS };
  },
});
</script>
