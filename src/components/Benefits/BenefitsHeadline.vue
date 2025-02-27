<template>
  <div class="grid grid-cols-4 col-span-2 bg-brand-gray-2 pl-14 pt-4">
    <div class="grid-cols-start-1 col-span-2">
      <header-container class="bg-brand-gray-2">
        <template #title>
          <h1 class="w-full text-5xl font-normal mb-4 text-left">
            Benefits at Careers
          </h1>
        </template>
        <template #subtitle>
          <h2 class="w-full my-4 text-lg font-base text-left">
            We strive to provide Googlers and their loved ones with a
            world-class benefits experience, focused on supporting their
            physical, financial, and emotional wellbeing. Our benefits are based
            on data, and centered around our users: Googlers and their families.
            They're thoughtfully designed to enhance your health and wellbeing,
            and generous enough to make it easy for you to take good care of
            yourself (now, and in the future). So we can build for everyone,
            together. *
          </h2>
        </template>
      </header-container>
    </div>
    <div class="grid-cols-start-3 col-span-2">
      <img :src="benefitsImage" class="w-3/4 pt-8 pl-8" />
    </div>
  </div>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default {
  name: "BenefitsView",
  components: {
    HeaderContainer,
  },
  setup() {
    return {
      benefitsImage: "images/benefits.png",
    };
  },
};
</script>
