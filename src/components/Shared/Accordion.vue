<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="toggleAccordion"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="changeIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Whoops! Nothing to see here yet!</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    changeIcon() {
      return this.isOpen ? ["fasl", "angle-up"] : ["fasl", "angle-down"];
    },
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
