<template>
  <section class="filter-section">
    <DropdownSection title="Price" :isOpen="true">
      <PriceFilter />
    </DropdownSection>

    <DropdownSection title="Brand" :isOpen="true">
      <SearchableFilter :options="brandOptions" />
    </DropdownSection>

    <DropdownSection title="Built-in memory" :isOpen="false">
      <SearchableFilter :options="memoryOptions" />
    </DropdownSection>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DropdownSection from "./DropdownSection.vue";
import PriceFilter from "./PriceFilter.vue";
import SearchableFilter from "./SearchableFilter.vue";
import FilterOption from "../types/Filter";

const brandOptions = ref<FilterOption[]>([
  { label: "Apple", count: 110, selected: true },
  { label: "Samsung", count: 125 },
  { label: "Xiaomi", count: 68 },
  { label: "Poco", count: 44 },
  { label: "OPPO", count: 36 },
  { label: "Honor", count: 10 },
  { label: "Motorola", count: 34 },
  { label: "Nokia", count: 22 },
  { label: "Realme", count: 35 },
]);

const memoryOptions = ref<FilterOption[]>([
  { label: "16GB", count: 65 },
  { label: "32GB", count: 123 },
  { label: "64GB", count: 48 },
  { label: "128GB", count: 50 },
  { label: "256GB", count: 24 },
  { label: "512GB", count: 8 },
]);
</script>

<style scoped>
.filter-section {
  margin-left: auto;
  margin-right: auto;
  max-width: 256px;
  width: 100%;
  padding: 0 1px;
}
</style>
