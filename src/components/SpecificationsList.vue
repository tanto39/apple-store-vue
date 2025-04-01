<template>
  <section class="specs-grid">
    <article v-for="(spec, index) in specifications" :key="index" class="spec-item">
      <img class="spec-icon" src="../assets/spec-screen.svg" alt=""/>
      <div class="spec-content">
        <span class="spec-label">{{ spec.characteristic }}</span>
        <span class="spec-value">{{ spec.value }} {{ spec.unit_type }}</span>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Characteristic } from "../types/Product";

export default defineComponent({
  name: "SpecificationsList",
  props: {
    specifications: {
      type: Array as () => Characteristic[],
      required: false,
    },
  }
});
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
