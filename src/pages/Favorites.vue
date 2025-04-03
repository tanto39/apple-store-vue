<template>
  <section class="favorites-container">
    <div class="favorites-content" v-if="products?.length > 0">
      <h1 class="favorites-title">Favorite</h1>
      <div class="favorites-list">
        <FavoriteProductCard v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div class="favorites-empty" v-else><p>Favorites is empty.</p></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import FavoriteProductCard from "../components/FavoriteProductCard.vue";

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

.favorites-empty {
  max-width: 1120px;
  margin: 0 auto;
}
</style>
