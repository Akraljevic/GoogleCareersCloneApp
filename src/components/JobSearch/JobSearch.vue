<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl px-4"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <!-- <input type="text" placeholder="Search for jobs" /> -->
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input v-model="location" placeholder="Ljubuški" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-3xl" />
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearch",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter();

    const role = ref("");
    const location = ref("");
    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: { role: role.value, location: location.value },
      });
    };
    return { role, location, searchForJobs };
  },
};
</script>
