<template>
  <section class="product-info">
    <h1 class="product-title">{{ title }}</h1>
    <div class="price-container">
      <p class="current-price">${{ currentPrice }}</p>
      <p class="original-price">${{ originalPrice }}</p>
    </div>
    <SpecificationsList :specifications="specifications" />
    <p class="description">
      Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day.
      Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras
      <a class="read-more" href="#details">more...</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import type { Specification } from "../types/Product";
import SpecificationsList from "../components/SpecificationsList.vue";

const specifications: Specification[] = [
  {
    icon: '/images/spec-screen.svg',
    label: "Screen size",
    value: '6.7"',
  },
  {
    icon: '/images/spec-cpu.svg',
    label: "CPU",
    value: "Apple A16 Bionic",
  },
];

defineProps<{
  title: string;
  currentPrice: number;
  originalPrice: number;
}>();

defineEmits<{
  (e: "read-more"): void;
}>();

</script>

<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
}

.product-title {
  font-size: 40px;
  font-style: italic;
  color: #000;
  line-height: 40px;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.current-price {
  font-size: 32px;
  font-style: italic;
  color: #000;
  line-height: 48px;
  letter-spacing: 0.96px;
}

.original-price {
  font-family: "Abel", sans-serif;
  font-size: 24px;
  color: #a0a0a0;
  text-decoration: line-through;
  line-height: 32px;
  letter-spacing: 0.72px;
}

.description {
  color: #6c6c6c;
  font-family: "Abel", sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.42px;
}

.read-more {
  color: #2c2c2c;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
}

@media (max-width: 640px) {
  .product-title {
    font-size: 32px;
    line-height: 36px;
  }

  .price-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
