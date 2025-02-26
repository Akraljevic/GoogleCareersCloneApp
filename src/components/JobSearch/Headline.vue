<template>
  <section class="mb-16 mt-20 ml-5">
    <h1 class="text-8xl mb-14 font-semibold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl">Find your next job with Careers!</h2>
  </section>
</template>

<script lang="ts">
interface Data {
  action: string;
  interval?: number;
}

interface ActionClasses {
  [x: string]: boolean;
}

import nextElementInList from "@/utils/nextElementInList";
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headline",
  data(): Data {
    return {
      action: "Build",
    };
  },
  computed: {
    actionClasses(): ActionClasses {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
});
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
