<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFilters/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
export default {
  name: "JobResults",
  components: { JobFiltersSidebar, JobListings },
  methods: {},
};
</script>
