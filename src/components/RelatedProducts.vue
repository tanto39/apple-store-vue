<template>
  <section class="related-products" v-if="relatedProducts.length > 0">
    <HomeTitle title="Related Products" />
    <ProductGrid :products="relatedProducts" />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import HomeTitle from "./HomeTitle.vue";
import ProductGrid from "./ProductGrid.vue";

export default defineComponent({
  name: "RelatedProducts",
  components: {
    HomeTitle,
    ProductGrid,
  },
  props: {
    category: {
      type: String,
      required: true
    },
    currentProductId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    const relatedProducts = computed(() => 
      store.getters['allProducts/productsByCategory']({
        category: props.category,
        excludeProductId: props.currentProductId
      }).slice(0, 4)
    );

    onMounted(() => {
      if (relatedProducts.value.length === 0) {
        store.dispatch('allProducts/loadProducts');
      }
    });

    return {
      relatedProducts
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
