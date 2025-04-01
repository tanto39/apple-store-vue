import { computed } from "vue";
import { useStore } from "vuex";

export const useFilter = () => {
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
};
