<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-100 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="filterbtn" />
        </div>
      </div>
      <accordion header="Degree"></accordion>
      <job-filters-sidebar-organization />
      <job-filters-sidebar-job-types />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarOrganization from "./JobFiltersSidebarOrganization.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganization,
    JobFiltersSidebarJobTypes,
  },
};
</script>
