<template>
  <header class="category-bar">
    <section class="counter-container">
      <span class="counter-label">Selected Products:</span>
      <span class="counter-value">{{ totalProducts }}</span>
    </section>

    <Sort label="By rating" :is-open="isFilterOpen" @click="toggleFilter" />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Sort from "./Sort.vue";

export default defineComponent({
  name: "ProductFilterBar",
  components: {
    Sort,
  },
  setup() {
    const store = useStore();
    const isFilterOpen = ref(false);

    const totalProducts = computed(() => {
      return store.getters["category/filteredProducts"]?.length || 0;
    });

    const toggleFilter = () => {
      isFilterOpen.value = !isFilterOpen.value;
    };

    return {
      totalProducts,
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
  margin-bottom: 24px;
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

@media (max-width: 991px) {
.counter-label, .counter-value {
  font-family: 'Abel', sans-serif;
}
}
</style>
