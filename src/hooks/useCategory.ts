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
    filteredProducts: computed(() => store.getters["category/filteredProducts"]),
    currentPage: computed(() => store.state.category.currentPage),
    itemsPerPage: computed(() => store.state.category.itemsPerPage),
    setPage: (page: number) => store.commit("category/SET_PAGE", page),
    isLoading: computed(() => store.state.category.isLoading),
    error: computed(() => store.state.category.error),
  };
};
