import { useRoute } from "vue-router";
import { computed } from "vue";

export const useCurrentPage = () => {
  const route = useRoute();
  return computed(() => Number.parseInt(route.query.page || "1"));
};
