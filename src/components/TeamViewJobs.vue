<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <div v-for="teamJob in teamJobs" :key="teamJob.id">
      <slot :teamjob="teamJob" />
    </div>
  </div>
</template>

<script>
import getTeamsJobs from "@/api/getTeamsJobs";
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  name: "TeamViewJobs",
  setup() {
    const teamJobs = ref([]);
    onMounted(async () => {
      teamJobs.value = await getTeamsJobs();
    });
    return { teamJobs };
  },
};
</script>
