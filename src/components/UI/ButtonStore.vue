<template>
  <button :class="['button', $attrs.class]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "ButtonStore",
    inheritAttrs: false
  })
</script>

<style scoped>
.button {
  border-radius: 6px;
  text-align: center;
  font-family: "ABeeZee", sans-serif;
  font-style: italic;
  cursor: pointer;
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  .button {
    width: 100%;
  }
}
</style>