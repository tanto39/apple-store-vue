<template>
  <div class="category">
    <Filter />
    <div class="product-list">
      <CategoryBar />
      <ProductGrid :products="products"/>
      <Pagination />
    </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Filter from '@/components/Filter.vue';
import CategoryBar from '@/components/CategoryBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import Pagination from '@/components/Pagination.vue';
import { Product, productList } from "../types/Product";

export default defineComponent({
  name: 'Category',
  components: { Filter, ProductGrid, CategoryBar, Pagination },
  setup() {
    const products: Product[] = productList;
    return {
      products,
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
