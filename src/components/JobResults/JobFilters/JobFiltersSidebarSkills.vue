<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-3 hover:border-black rounded w-full text-base"
      placeholder="AI developer, Data Scientist, etc."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import { UPDATE_SKILL_SEARCH_TERM } from "@/store/constants";

export default defineComponent({
  name: "JobfiltersSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILL_SEARCH_TERM, value);
      },
    });

    return {
      skillsSearchTerm,
    };
  },
});
</script>
