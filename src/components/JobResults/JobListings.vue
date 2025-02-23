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

<script lang="ts">
import { computed, onMounted, defineComponent } from "vue";
import {
  useFilteredJobs,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from "@/store/composables";
import { useCurrentPage } from "@/composables/useCurrentPage";
import usePreviousAndNextPage from "@/composables/usePreviousAndNextPage";
import JobListing from "./JobListing.vue";

export default defineComponent({
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobsDispatch);
    onMounted(useFetchDegreesDispatch);
    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const lastPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
    const { previousPage, nextPage } = usePreviousAndNextPage(
      currentPage,
      lastPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10 - 1;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return {
      currentPage,
      previousPage,
      nextPage,
      displayedJobs,
    };
  },
});
</script>

<style scoped lang="postcss">
.btn {
  @apply flex items-center justify-center p-2 text-brand-blue-2 hover:bg-brand-gray-1 rounded duration-150 ease-out text-sm font-semibold;
}
</style>
