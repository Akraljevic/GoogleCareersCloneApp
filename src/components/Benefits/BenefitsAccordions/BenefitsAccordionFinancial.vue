<template>
  <div class="flex justify-center w-full">
    <div class="w-full max-w-7xl">
      <accordion
        header="Financial wellbeing"
        header-class="text-4xl tracking-tight"
        class="pb-6"
      >
        <div class="flex items-start py-8">
          <div class="flex items-start space-x-4 w-1/3">
            <div class="bg-blue-100 p-4 rounded-full">
              <font-awesome-icon
                :icon="['fas', 'money-bills']"
                class="text-blue-600 text-2xl"
              />
            </div>
            <p class="text-2xl text-gray-700">
              {{ financialItems[0].description }}
            </p>
          </div>

          <div class="w-2/3">
            <ul
              class="text-lg text-gray-700 ml-5 grid grid-cols-2 gap-y-3 pl-10"
            >
              <li
                v-for="item in financialItems.slice(1)"
                :key="item"
                class="flex items-start space-x-2"
              >
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="text-blue-500 text-lg mt-1 pr-3"
                />
                <span>{{ item.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </accordion>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { financialItems } from "@/data/BenefitsData";
export default {
  name: "BenefitsAccordionFinancial",
  components: {
    Accordion,
  },

  setup() {
    return {
      benefitsImage: "images/benefits.png",
      financialItems,
    };
  },
  data() {
    return {};
  },
};
</script>
