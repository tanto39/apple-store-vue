<template>
  <section class="favorites-container">
    <div class="favorites-content">
      <h1 class="favorites-title">Favorite</h1>
      <div v-if="products?.length > 0" class="favorites-list">
        <FavoriteProductCard v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import FavoriteProductCard from "../components/FavoriteProductCard.vue";
import { Product } from "../types/Product";

export default defineComponent({
  name: "FavoriteProducts",
  components: {
    FavoriteProductCard,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters['favorites/favoriteProducts']);

    return {
      products
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
