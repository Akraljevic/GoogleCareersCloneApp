<template>
  <benefits-accordion-health />
  <benefits-accordion-financial />
</template>

<script>
import BenefitsAccordionHealth from "./BenefitsAccordions/BenefitsAccordionHealth.vue";
import BenefitsAccordionFinancial from "@/components/Benefits/BenefitsAccordions/BenefitsAccordionFinancial.vue";
export default {
  name: "BenefitsView",
  components: {
    BenefitsAccordionFinancial,
    BenefitsAccordionHealth,
  },
};
</script>
