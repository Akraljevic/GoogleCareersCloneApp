import { computed } from "vue";
import { useRoute } from "vue-router";

export const useConfirmRoute = (routeName) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};
