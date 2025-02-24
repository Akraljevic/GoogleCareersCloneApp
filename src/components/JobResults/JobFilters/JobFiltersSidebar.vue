<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-100 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do</h3>
        <div class="flex items-center">
          <job-filter-sidebar-prompt />
        </div>
      </div>
      <job-filters-sidebar-skills />
      <accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </accordion>
      <accordion header="Organizations">
        <job-filters-sidebar-organization />
      </accordion>
      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILL_SEARCH_TERM } from "@/store/constants";
import Accordion from "@/components/Shared/Accordion.vue";

import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganization from "./JobFiltersSidebarOrganization.vue";
import JobFilterSidebarPrompt from "./JobFilterSidebarPrompt.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";
export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganization,
    JobFilterSidebarPrompt,
    JobFiltersSidebarSkills,
  },
  setup() {
    const store = useStore(key);
    const route = useRoute();
    const parseSkillSearchTerm = () => {
      const role = route.query.role || "";
      store.commit(UPDATE_SKILL_SEARCH_TERM, role);
    };
    onMounted(parseSkillSearchTerm);
    return { parseSkillSearchTerm };
  },
});
</script>
