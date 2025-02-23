<template>
  <div>Id for job {{ currentJobId }}</div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();
    const currentJobId = computed(() => route.params.id);
    return { currentJobId };
  },
});
</script>
