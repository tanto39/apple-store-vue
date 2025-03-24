<template>
  <div class="searchable-filter">
    <SearchInput class="search-field"/>
    <div class="options-list">
      <CheckboxField
        v-for="option in filteredOptions"
        :key="option.label"
        :label="option.label"
        :count="option.count"
        v-model="option.selected"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CheckboxField from "../components/UI/CheckboxField.vue";
import FilterOption from "../types/Filter";

const props = defineProps<{
  options: FilterOption[];
  placeholder?: string;
}>();

const searchQuery = ref("");

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options;
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>

<style scoped>
.searchable-filter {
  width: 100%;
}

.search-field {
  width: auto;
  padding: 8px 16px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
}
</style>
