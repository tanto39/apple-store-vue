<template>
  <article class="product-details">
    <ImageGallery :images="images" :main-image="mainImage" @select-image="handleImageSelect" />
    <section class="product-content">
      <ProductInfo title="Apple iPhone 14 Pro Max" :current-price="1399" :original-price="1499" />
      <ProductActions @add-to-wishlist="handleAddToWishlist" @add-to-cart="handleAddToCart" />
      <DeliveryFeatures :features="deliveryFeatures" />
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageGallery from "../components/ImageGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import ProductActions from "../components/ProductActions.vue";
import DeliveryFeatures from "../components/DeliveryFeatures.vue";
import type { ProductImage, DeliveryFeature } from "../types/Product";

const images = ref<ProductImage[]>([
  {
    url: "/images/product-detail.png",
    isActive: true,
  },
  {
    url: "/images/PlayStation.png",
  },
]);

const mainImage = ref<ProductImage>({
  url: "/images/product-detail.png",
});

const deliveryFeatures: DeliveryFeature[] = [
  {
    icon: '/images/delivery.svg',
    title: "Free Delivery",
    subtitle: "1-2 day",
  },
  {
    icon: '/images/stock.svg',
    title: "In Stock",
    subtitle: "Today",
  },
  {
    icon: '/images/Guaranteed.svg',
    title: "Guaranteed",
    subtitle: "1 year",
  },
];

const handleImageSelect = (index: number) => {
  images.value = images.value.map((thumb, i) => ({
    ...thumb,
    isActive: i === index,
  }));
  mainImage.value = {
    url: images.value[index].url,
  };
};

const handleAddToWishlist = () => {
  // Implement add to wishlist functionality
};

const handleAddToCart = () => {
  // Implement add to cart functionality
};
</script>

<style scoped>
.product-details {
  display: flex;
  padding: 112px 0;
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
  .product-details {
    flex-direction: column;
    padding: 48px 0;
  }

  .product-content {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .product-details {
    padding: 24px 16px;
  }
}
</style>
