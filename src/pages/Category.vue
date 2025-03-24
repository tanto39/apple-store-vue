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
import { Product } from "../types/Product";

export default defineComponent({
  name: 'Category',
  components: { Filter, ProductGrid, CategoryBar, Pagination },
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
      {
        id: "5",
        image: "/images/product-card.png",
        altText: "Galaxy Watch",
        title: "Samsung Galaxy Watch6 Classic 47mm Black",
        price: "$369",
      },
      {
        id: "6",
        image: "/images/product-card.png",
        altText: "Galaxy Z Fold",
        title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
        price: "$1799",
      },
      {
        id: "7",
        image: "/images/product-card.png",
        altText: "Galaxy Buds",
        title: "Galaxy Buds FE Graphite",
        price: "$99.99",
      },
      {
        id: "8",
        image: "/images/product-card.png",
        altText: "iPad",
        title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
        price: "$398",
      },
    ];

    return {
      products,
    };
  },
});
</script>

<style scoped>
  .category {
    display: flex;
    padding: 24px 160px 56px 160px;
  }
  .product-list {
    margin: 0 0 0 32px;
  }
</style>
