<template>
  <accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue" type="checkbox" class="mr-3" />
            <label for="Between Vue">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue King" type="checkbox" class="mr-3" />
            <label for="Vue King">Vue King</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue And A Half Men" type="checkbox" class="mr-3" />
            <label for="Vue And A Half Men">Vue And A Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganization",
  components: { Accordion },
};
</script>
