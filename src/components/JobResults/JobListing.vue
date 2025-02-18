<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-salid border-brand-gray-2 rounded-2xl shadow-gray hover:shadow-gray"
      ><div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="text-2xl mb-2">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h2 class="qual">Minimum Qualifications:</h2>
          <div>
            <ul class="lst">
              <li v-for="minQual in job.minimumQualifications" :key="minQual">
                {{ minQual }}
              </li>
            </ul>
          </div>
          <div>
            <h2 class="qual">Preffered Qualifications:</h2>
            <div>
              <ul class="lst">
                <li
                  v-for="prefQual in job.preferredQualifications"
                  :key="prefQual"
                >
                  {{ prefQual }}
                </li>
              </ul>
            </div>
            <div class="pt-4 mb-3">
              <router-link
                :to="jobPageLink"
                class="border px-5 py-2 mx-2 text-[14px] font-sans font-medium rounded text-brand-blue-2 hover:bg-brand-gray-2 hover:text-brand-blue-1 duration-150 ease-out"
                >Learn more</router-link
              >
            </div>
          </div>
        </div>
      </div></router-link
    >
  </li>
</template>

<script>
export default {
  name: "JobListings",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.qual {
  @apply mt-1 mb-2 font-semibold;
}
.lst {
  @apply list-disc list-inside pl-8;
}
</style>
