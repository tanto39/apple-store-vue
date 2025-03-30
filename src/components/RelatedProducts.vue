<template>
  <section class="related-products">
    <HomeTitle title="Related Products" />
    <ProductGrid :products="products" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTitle from "./HomeTitle.vue";
import ProductGrid from "./ProductGrid.vue";
import { Product, productList } from "../types/Product";

export default defineComponent({
  name: "RelatedProducts",
  components: {
    HomeTitle,
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
.related-products {
  padding: 56px 0;
  max-width: 1120px;
  margin: 0 auto;
  gap: 32px;
}

@media (max-width: 991px) {
  .related-products {
    padding: 40px 0;
  }
}

@media (max-width: 640px) {
  .related-products {
    padding: 20px 0;
  }
}
</style>
