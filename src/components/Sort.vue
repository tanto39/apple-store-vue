<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-button">
      {{ selectedOption }}
      <span class="arrow"></span>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type SortOption = {
  value: string;
  label: string;
};

const options: SortOption[] = [
  { value: 'rating', label: 'By rating' },
  { value: 'price', label: 'By price' },
  { value: 'createdAt', label: 'By delivery' }
];

const isOpen = ref(false);
const selectedOption = ref(options[0].label);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: SortOption) => {
  selectedOption.value = option.label;
  isOpen.value = false;
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: white;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  font: 16px Abel, Helvetica, Arial, sans-serif;
}

.arrow {
  margin-left: auto;
  background: url("../assets/Sort.svg") center center no-repeat;
  width: 24px;
  height: 12px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  width: 100%;
}

.dropdown-menu li {
  padding: 8px 12px;
  cursor: pointer;
  font: 14px Abel, Helvetica, Arial, sans-serif;
}

.dropdown-menu li:hover {
  background: #f0f0f0;
}
</style>
