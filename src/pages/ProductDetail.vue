<template>
  <article class="product-details">
    <Loader v-if="isLoading" />
    <ErrorMessage v-else-if="error" :message="error" />
    <div v-else>
      <div class="product-details__main">
        <ImageGallery v-if="product.images?.length > 0" :productImages="product.images" />
        <section class="product-content">
          <ProductInfo
            :title="product.name"
            :current-price="product.discount_price || product.price"
            :original-price="product.discount_price ? product.price : null"
            :specifications="product.characteristics"
          />
          <ProductActions :product="product" />
          <DeliveryFeatures />
        </section>
      </div>
      <ProductDetails :specifications="product.characteristics" />
      <Rating :rating="product.rating" :review-count="product.count_review" />
      <RelatedProducts :category="product.category" :current-product-id="product.id"/>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageGallery from "../components/ImageGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import ProductActions from "../components/ProductActions.vue";
import ProductDetails from "../components/ProductDetails.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import Rating from "../components/Rating.vue";
import { useProductDetail } from "@/hooks/useProductDetail";

export default defineComponent({
  name: "ProductDetail",
  components: {
    ImageGallery,
    ProductInfo,
    ProductActions,
    ProductDetails,
    RelatedProducts,
    Rating,
  },
  setup() {
    const { product, isLoading, error } = useProductDetail();

    return {
      product,
      isLoading,
      error,
    };
  },
});
</script>

<style scoped>
.product-details__main {
  display: flex;
  padding: 112px 0;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  gap: 48px;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1;
}

@media (max-width: 991px) {
  .product-details__main {
    flex-direction: column;
    padding: 48px 0;
  }

  .product-content {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .product-details__main {
    padding: 24px 0;
  }
}
</style>
