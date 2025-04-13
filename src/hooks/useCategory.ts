import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export const useCategory = () => {
  const store = useStore();
  const route = useRoute();

  const categoryId = computed(() => parseInt(route.params.id as string));
  store.dispatch("category/loadProducts", categoryId.value);

  return {
    paginatedProducts: computed(() => store.getters["category/paginatedProducts"]),
    isLoading: computed(() => store.state.category.isLoading),
    error: computed(() => store.state.category.error),
    categoryId,
  };
};
