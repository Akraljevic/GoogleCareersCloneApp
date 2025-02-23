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
import { defineComponent } from "vue";

import Accordion from "@/components/Shared/Accordion.vue";

import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganization from "./JobFiltersSidebarOrganization.vue";
import JobFilterSidebarPrompt from "./JobFilterSidebarPrompt.vue";
export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganization,
    JobFilterSidebarPrompt,
  },
  setup() {},
});
</script>
