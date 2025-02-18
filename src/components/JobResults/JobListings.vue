<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm font-semibold flex-grow">{{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="btn"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            class="btn"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_JOBS } from "@/store";

import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const lastPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= lastPage ? nextPage : undefined;
    },
    currentPage() {
      const pageString = this.$route.query.page || 1;
      return Number.parseInt(pageString);
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10 - 1;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["jobs"]),
  },
  async mounted() {
    this.$store.dispatch(FETCH_JOBS);
  },
}; // const baseUrl = process.env.VUE_APP_API_URL;
// const response = await axios.get(`${baseUrl}/jobs`);
// this.jobs = response.data;
</script>

<style scoped lang="postcss">
.btn {
  @apply flex items-center justify-center p-2 text-brand-blue-2 hover:bg-brand-gray-1 rounded duration-150 ease-out text-sm font-semibold;
}
</style>
