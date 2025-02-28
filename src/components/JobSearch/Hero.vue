<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>

        <div class="col-start-2 col-span-5">
          <headline />
          <job-search />
        </div>

        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <spotlight class="flex flex-row justify-center pb-16">
      <template #default="{ title, img, description }">
        <router-link
          to="jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
          :style="{ width: '530px', height: '268px' }"
        >
          <div
            :style="{ backgroundImage: 'url(' + img + ')' }"
            class="flex flex-col justify-end h-full bg-cover"
          >
            <div class="text-white">
              <div class="px-6 py-4">
                <h3 class="text-xl">
                  {{ title }}
                </h3>
                <p class="mt-3 text-sm">
                  {{ description }}
                </p>
              </div>
            </div>
            <router-link
              to="/jobs/results"
              class="pb-4 px-6 text-xs text-white"
            >
              See jobs</router-link
            >
          </div>
        </router-link>
      </template>
    </spotlight>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearch from "@/components/JobSearch/JobSearch.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    Headline,
    JobSearch,
    Spotlight,
  },
});
</script>
