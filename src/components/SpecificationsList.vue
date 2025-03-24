<template>
  <section class="specs-grid">
    <article v-for="(spec, index) in specifications" :key="index" class="spec-item">
      <img class="spec-icon" :src="spec.icon" alt=""/>
      <div class="spec-content">
        <span class="spec-label">{{ spec.label }}</span>
        <span class="spec-value">{{ spec.value }}</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { Specification } from "../types/Product";

defineProps<{
  specifications: Specification[];
}>();
</script>

<style scoped>
.specs-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
}

.spec-item {
  display: flex;
  min-width: 168px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  flex: 1;
  border-radius: 7px;
  background-color: #f4f4f4;
}

.spec-content {
  display: flex;
  flex-direction: column;
  color: #4e4e4e;
  font-family: "ABeeZee", sans-serif;
  font-size: 14px;
  font-style: italic;
  line-height: 16px;
}

.spec-label {
  color: #a7a7a7;
  font-family: "Abel", sans-serif;
}

@media (max-width: 640px) {
  .spec-item {
    min-width: 100%;
  }
}
</style>
