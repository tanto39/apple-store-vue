<template>
  <div class="category-container">
    <div class="category">
      <Filter class="filter-block"/>
      <div class="product-list">
        <CategoryBar />
        <Loader v-if="isLoading" />
        <ErrorMessage v-if="error" :message="error" />
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
import { defineComponent } from "vue";
import { useCategory } from "@/hooks/useCategory";
import Filter from "@/components/Filter.vue";
import CategoryBar from "@/components/CategoryBar.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "Category",
  components: { Filter, ProductGrid, CategoryBar, Pagination },
  setup() {
    const { paginatedProducts, filteredProducts, currentPage, itemsPerPage, setPage, isLoading, error } = useCategory();

    return {
      paginatedProducts,
      filteredProducts,
      currentPage,
      itemsPerPage,
      setPage,
      isLoading, 
      error
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
  width: 100%;
}
@media (max-width: 991px) {
  .category{
    padding: 24px 5px 56px 5px;
  }
  .filter-block{
    display: none;
  }
  .product-list{
    margin: 0;
  }
}
</style>
