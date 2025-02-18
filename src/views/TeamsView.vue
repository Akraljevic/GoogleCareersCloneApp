<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-5xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-lg font-base text-brand-gray-3">
        Together, we create access to information and build products that
        improve people's lives.<br />
        Want to be a Googler? Find your role.
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
