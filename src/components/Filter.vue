<template>
  <section class="filter-section">
    <DropdownSection title="Price" :isOpen="true">
      <PriceFilter @update:price="setPriceRange" />
    </DropdownSection>

    <DropdownSection v-for="char in characteristics" :key="char.name" :title="char.name" :isOpen="false">
      <SearchableFilter
        :options="
          char.values.map((v) => ({
            label: v.value,
            count: v.count,
          }))
        "
        :selected="selectedCharacteristics[char.name] || []"
        @update:selected="setCharacteristicFilter(char.name, $event)"
      />
    </DropdownSection>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import DropdownSection from "./DropdownSection.vue";
import PriceFilter from "./PriceFilter.vue";
import SearchableFilter from "./SearchableFilter.vue";

export default defineComponent({
  name: "Filter",
  components: {
    DropdownSection,
    PriceFilter,
    SearchableFilter,
  },
  setup() {
    const store = useStore();

    const characteristics = computed(() => store.getters["category/characteristicsWithCounts"]);

    const selectedCharacteristics = computed(() => store.state.category.filters.characteristics);

    const setPriceRange = (range: [number, number]) => {
      store.commit("category/SET_FILTERS", {
        ...store.state.category.filters,
        priceRange: range,
      });
    };

    const setCharacteristicFilter = (charName: string, values: string[]) => {
      const newCharacteristics = { ...store.state.category.filters.characteristics };

      if (values.length > 0) {
        newCharacteristics[charName] = values;
      } else {
        delete newCharacteristics[charName];
      }

      store.commit("category/SET_FILTERS", {
        ...store.state.category.filters,
        characteristics: newCharacteristics,
      });
    };

    return {
      characteristics,
      selectedCharacteristics,
      setPriceRange,
      setCharacteristicFilter,
    };
  },
});
</script>

<style scoped>
.filter-section {
  max-width: 256px;
  width: 100%;
  padding: 0 1px;
}
</style>
