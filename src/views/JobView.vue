<template>
  <div class="max-w-4xl mx-auto mt-4 p-6 shadow-gray rounded-xl">
    <div v-if="job" class="space-y-4">
      <div class="border-b pb-4">
        <h1 class="text-2xl font-semibold text-gray-800">{{ job.title }}</h1>
        <p class="text-lg text-blue-600 font-medium mt-1">
          {{ job.organization }}
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <div
            v-for="location in job.locations"
            :key="location"
            class="flex items-center text-gray-600"
          >
            <font-awesome-icon :icon="['fas ', 'location-dot']" class="mr-3" />
            {{ location }}
          </div>
        </div>
      </div>

      <div class="space-y-3 border-b pb-4">
        <h2 class="text-xl font-medium text-gray-800">Job Description</h2>
        <div class="space-y-2">
          <p
            v-for="description in job.description"
            :key="description"
            class="text-gray-700 leading-relaxed"
          >
            {{ description }}
          </p>
        </div>
      </div>

      <div class="space-y-3">
        <h2 class="text-xl font-medium text-gray-800">
          Preferred Qualifications
        </h2>
        <ul class="list-disc list-inside space-y-1">
          <li
            v-for="prefQual in job.preferredQualifications"
            :key="prefQual"
            class="text-gray-700"
          >
            {{ prefQual }}
          </li>
        </ul>
      </div>

      <div class="mt-6">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300 ease-in-out"
        >
          Apply Now
        </button>
      </div>
    </div>

    <div v-else class="p-6 text-center text-gray-500">
      Loading job details...
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { useFetchJobsDispatch } from "@/store/composables";

export default {
  name: "JobView",
  setup() {
    onMounted(useFetchJobsDispatch);
    const route = useRoute();
    const store = useStore(key);
    const currentJobId = computed(() => route.params.id);
    const job = computed(() =>
      store.state.jobs.find((job) => job.id === currentJobId.value)
    );
    return { currentJobId, job };
  },
};
</script>
