<template>
  <div class="dropdown-section">
    <button
      class="dropdown-header"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
    >
      <span class="dropdown-title">{{ title }}</span>
      <div :class="['dropdown-icon', { 'dropdown-icon_open': isOpen }]"></div>
    </button>
    <div v-if="isOpen" class="dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface DropdownProps {
  title: string;
  isOpen?: boolean;
}

const props = withDefaults(defineProps<DropdownProps>(), {
  isOpen: false,
});

const isOpen = ref(props.isOpen);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.dropdown-section {
  width: 100%;
  margin-top: 24px;
}

.dropdown-header {
  border-radius: 4px;
  display: flex;
  width: 100%;
  padding: 12px 0;
  align-items: start;
  font-size: 18px;
  color: #000;
  font-weight: 400;
  letter-spacing: 0.54px;
  line-height: 1;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.dropdown-title {
  flex: 1;
}

.dropdown-icon {
  width: 24px;
  height: 12px;
  background: url('../assets/dropdown.svg') center center no-repeat;
  flex-shrink: 0;
}
.dropdown-icon_open {
  transform: rotate(180deg);
}

.dropdown-content {
  margin-top: 24px;
}
</style>
