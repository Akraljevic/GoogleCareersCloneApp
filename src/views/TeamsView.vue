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
  <div class="w-full py-4 pl-11">
    <team-view-jobs class="flex flex-wrap justify-center pb-16">
      <template #default="slotProps">
        <div
          class="flex flex-col border rounded-lg w-72 bg-brand-gray-2 h-96 overflow-hidden"
        >
          <img :src="slotProps.teamjob.img" class="object-cover h-48 w-full" />
          <div class="p-4">
            <h3 class="text-lg font-medium">{{ slotProps.teamjob.title }}</h3>
            <p class="mt-3 text-sm">{{ slotProps.teamjob.description }}</p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 pt-8 text-sm text-brand-blue-2 hover:text-brand-blue-1"
            >Learn more</router-link
          >
        </div>
      </template>
    </team-view-jobs>
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
