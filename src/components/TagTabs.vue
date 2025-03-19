<template>
  <nav class="tabs">
    <button class="tabs__item tabs__item_active">New Arrival</button>
    <button class="tabs__item">Bestseller</button>
    <button class="tabs__item">Featured Products</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagTabs",
});
</script>

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.tabs__item {
  color: #8b8b8b;
  font-family: ABeeZee;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.tabs__item:hover,
.tabs__item_active {
  color: #000;
  border-bottom: 2px solid #000;
}

@media (max-width: 991px) {
  .tabs {
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .tabs {
    gap: 16px;
    overflow-x: auto;
  }
}
</style>
