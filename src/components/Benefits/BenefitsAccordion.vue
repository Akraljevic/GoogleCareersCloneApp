<template>
  <benefits-accordion-health />
  <benefits-accordion-financial />
  <beneftis-accordion-time />
</template>

<script>
import BenefitsAccordionHealth from "./BenefitsAccordions/BenefitsAccordionHealth.vue";
import BenefitsAccordionFinancial from "@/components/Benefits/BenefitsAccordions/BenefitsAccordionFinancial.vue";
import BeneftisAccordionTime from "./BeneftisAccordionTime.vue";
export default {
  name: "BenefitsView",
  components: {
    BenefitsAccordionFinancial,
    BenefitsAccordionHealth,
    BeneftisAccordionTime,
  },
};
</script>
