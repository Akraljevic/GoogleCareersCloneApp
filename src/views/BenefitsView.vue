<template>
  <benefits-headline />
  <div class="p-5 m-8">
    <benefits-accordion />
  </div>
</template>

<script>
import BenefitsHeadline from "@/components/Benefits/BenefitsHeadline.vue";
import BenefitsAccordion from "@/components/Benefits/BenefitsAccordion.vue";
export default {
  name: "BenefitsView",
  components: {
    BenefitsHeadline,
    BenefitsAccordion,
  },
  setup() {
    return {
      benefitsImage: "images/benefits.png",
    };
  },
};
</script>
