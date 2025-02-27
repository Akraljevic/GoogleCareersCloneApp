<template>
  <div class="flex flex-wrap">
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.description }}</p>
      <p>{{ job.organization }}</p>
      <p>{{ job.locations }}</p>
      <p>{{ job.minimumQualifications }}</p>
      <p>{{ job.preferredQualifications }}</p>
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
