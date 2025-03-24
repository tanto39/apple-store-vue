<template>
  <section class="discount-products">
    <HomeTitle title="Discounts up to -50%" />
    <ProductGrid :products="products" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTitle from "./HomeTitle.vue";
import ProductGrid from "./ProductGrid.vue";
import { Product } from "../types/Product";

export default defineComponent({
  name: "ProductsHome",
  components: {
    HomeTitle,
    ProductGrid,
  },
  setup() {
    const products: Product[] = [
      {
        id: "1",
        image: "/images/product-card.png",
        altText: "iPhone 14 Pro",
        title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
        price: "$900",
      },
      {
        id: "2",
        image: "/images/product-card.png",
        altText: "Blackmagic Camera",
        title: "Blackmagic Pocket Cinema Camera 6k",
        price: "$2535",
      },
      {
        id: "3",
        image: "/images/product-card.png",
        altText: "Apple Watch",
        title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$399",
      },
      {
        id: "4",
        image: "/images/product-card.png",
        altText: "AirPods Max",
        title: "AirPods Max Silver",
        price: "$549",
      },
      
    ];
    return {
      products,
    };
  },
});
</script>

<style scoped>
.discount-products {
  padding: 56px 160px;
  gap: 32px;
}

@media (max-width: 991px) {
  .discount-products {
    padding: 40px;
  }
}

@media (max-width: 640px) {
  .discount-products {
    padding: 20px;
  }
}
</style>
