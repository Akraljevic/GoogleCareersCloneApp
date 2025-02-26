<template>
  <div class="flex flex-row items-center w-full mt-14">
    <form
      class="flex items-center h-12 border border-solid border-brand-gray-3 rounded-3xl px-4"
      @submit.prevent="searchForJobs"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <div class="flex flex-nowrap flex-1 h-full text-base font-light">
        <div class="relative flex items-center flex-1 h-full pr-3">
          <label class="absolute left-0 -top-10">Role</label>
          <text-input v-model="role" placeholder="Software Engineer" />
        </div>
      </div>
    </form>

    <form
      class="flex items-center h-12 ml-5 border border-solid border-brand-gray-3 rounded-3xl px-4"
      @submit.prevent="searchForJobs"
    >
      <font-awesome-icon :icon="['fas ', 'location-dot']" class="mr-3" />
      <div class="flex flex-nowrap flex-1 h-full text-base font-light">
        <div class="relative flex items-center flex-1 h-full">
          <label class="absolute left-0 -top-8">Where?</label>
          <text-input v-model="location" placeholder="Ljubuški" />
        </div>
      </div>
    </form>
    <div class="ml-5">
      <action-button text="Search" type="jobSearchBtn" @click="searchForJobs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default defineComponent({
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
});
</script>
