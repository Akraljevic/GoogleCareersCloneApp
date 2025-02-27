<template>
  <div class="py-3 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 :class="['text-lg font-medium', headerClass]">{{ header }}</h3>
      <div
        class="flex items-center justify-center hover:bg-brand-gray-2 w-12 h-12 p-3 rounded-full"
      >
        <font-awesome-icon :icon="changeIcon" />
      </div>
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Whoops! Nothing to see here yet!</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
    headerClass: {
      type: String,
      required: false,
      default: "text-lg font-medium",
    },
  },
  setup() {
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };
    const changeIcon = computed(() => {
      return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
    });
    return {
      open,
      isOpen,
      changeIcon,
    };
  },
});
</script>
