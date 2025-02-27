<template>
  <header-container class="border-b border-brand-gray-1">
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
  <div class="flex">
    <team-view-jobs />
  </div>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import TeamViewJobs from "@/components/TeamViewJobs.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
    TeamViewJobs,
  },
};
</script>
