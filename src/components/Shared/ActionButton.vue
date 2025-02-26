<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, toRefs } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ActionButton",
  props: {
    text: { type: String, required: true },
    type: {
      type: String,
      default: "primary",
      required: false,
      validator: (value: string) => {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);

    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });
    return {
      buttonClass,
    };
  },
});
</script>

<style lang="postcss" scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply text-white rounded bg-brand-blue-1 hover:shadow-blue duration-150 ease-out;
}
.secondary {
  @apply text-brand-blue-2  hover:text-brand-blue-1  duration-150 ease-out;
}
.filterbtn {
  @apply text-brand-blue-2 text-sm p-2 flex items-center font-semibold rounded hover:bg-brand-gray-2 hover:text-brand-blue-1 duration-150 ease-out;
}
.jobSearchBtn {
  @apply text-white rounded-3xl bg-blue-600 hover:bg-brand-blue-1 text-sm py-4 font-semibold;
}
</style>
