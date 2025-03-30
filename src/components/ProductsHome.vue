<template>
  <section class="products-home">
    <TagTabs />
    <ProductGrid :products="products" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagTabs from "./TagTabs.vue";
import ProductGrid from "./ProductGrid.vue";
import { Product, productList } from "../types/Product";

export default defineComponent({
  name: "ProductsHome",
  components: {
    TagTabs,
    ProductGrid,
  },
  setup() {
    const products: Product[] = productList.slice(0, 4);

    return {
      products,
    };
  },
});
</script>

<style scoped>
.products-home {
  display: flex;
  flex-direction: column;
  padding: 56px 0;
  max-width: 1120px;
  margin: 0 auto;
  align-items: flex-start;
  gap: 32px;
  background-color: #fff;
}

@media (max-width: 991px) {
  .products-home {
    padding: 40px 0;
  }
}

@media (max-width: 640px) {
  .products-home {
    padding: 20px 0;
  }
}
</style>
