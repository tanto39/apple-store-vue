<template>
  <section class="favorites-container">
    <div class="favorites-content">
      <h1 class="favorites-title">Favorite</h1>
      <div class="favorites-list">
        <FavoriteProductCard v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FavoriteProductCard from "../components/FavoriteProductCard.vue";
import { Product, productList } from "../types/Product";

export default defineComponent({
  name: "FavoriteProducts",
  components: {
    FavoriteProductCard,
  },
  setup() {
    const products: Product[] = productList;

    return {
      products,
    };
  },
});
</script>

<style scoped>
.favorites-content {
  max-width: 349px;
  margin: 112px auto;
}

.favorites-title {
  font-size: 24px;
  font-family:
    Abel,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  line-height: 1;
}

.favorites-list {
  border-radius: 15px;
  margin-top: 40px;
}

</style>
