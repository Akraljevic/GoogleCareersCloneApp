<template>
  <action-button text="Clear filters" type="filterbtn" @click="clearFilters" />
</template>

<script>
import { key } from "@/store";
import { useStore } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";

import { CLEAR_FILTERS } from "@/store/constants";

export default {
  name: "JobFilterSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);
    const clearFilters = () => {
      store.commit(CLEAR_FILTERS);
    };
    return {
      clearFilters,
    };
  },
};
</script>
