<template>
  <button
    :class="['favorite-button', { 'favorite-button_active': isActive }]"
    @click="$emit('toggle')"
    aria-label="Add to favorites"
  ></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FavoriteButton",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggle"],
});
</script>

<style scoped>
.favorite-button {
  width: 32px;
  height: 32px;
  background: "../../assets/favorite-button.svg";
  border: none;
  padding: 0;
  cursor: pointer;
}
.favorite-button_active {
  background: "../../assets/favorite-active.svg";
}
</style>
