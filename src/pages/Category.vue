<template>
  <div class="category-container">
    <div class="category">
      <Filter />
      <div class="product-list">
        <CategoryBar />
        <ProductGrid v-if="paginatedProducts[0]" :products="paginatedProducts" />
        <p v-else>Products not found.</p>
        <Pagination
          :current-page="currentPage"
          :total-items="filteredProducts.length"
          :items-per-page="itemsPerPage"
          @page-change="setPage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Filter from "@/components/Filter.vue";
import CategoryBar from "@/components/CategoryBar.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "Category",
  components: { Filter, ProductGrid, CategoryBar, Pagination },
  setup() {
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
    };
  },
});
</script>

<style scoped>
.category {
  display: flex;
  padding: 24px 0 56px 0;
  max-width: 1120px;
  margin: 0 auto;
}
.product-list {
  margin: 0 0 0 32px;
}
</style>
