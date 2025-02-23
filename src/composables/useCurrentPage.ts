import { useRoute } from "vue-router";
import { computed } from "vue";

export const useCurrentPage = () => {
  const route = useRoute();
  const page = route.query.page as string;
  return computed(() => Number.parseInt(page || "1"));
};
