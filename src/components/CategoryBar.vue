<template>
  <header class="category-bar">
    <section class="counter-container">
      <span class="counter-label">Selected Products:</span>
      <span class="counter-value">85</span>
    </section>

    <Sort label="By rating" :is-open="isFilterOpen" @click="toggleFilter" />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sort from "./Sort.vue";

export default defineComponent({
  name: "ProductFilterBar",
  components: {
    Sort,
  },
  setup() {
    const isFilterOpen = ref(false);

    const toggleFilter = () => {
      isFilterOpen.value = !isFilterOpen.value;
    };

    return {
      isFilterOpen,
      toggleFilter,
    };
  },
});
</script>

<style scoped>
.category-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 0 16px 0;
}
.counter-container {
  display: flex;
  min-width: 200px;
  align-items: flex-end;
  gap: 6px;
}

.counter-label {
  color: #6c6c6c;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.48px;
}

.counter-value {
  color: #000;
  text-align: center;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 0.6px;
}
</style>
