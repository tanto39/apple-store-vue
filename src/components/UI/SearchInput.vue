<template>
  <div class="search-container">
    <img alt="" class="search-icon" src="../../assets/Search.svg" />
    <input type="text" v-model="searchQuery" placeholder="Search" class="search-input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
  props: {
    searchQuery : { type: String }
  }
});
</script>

<style scoped>
  .search-container {
    display: flex;
    align-items: center;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
  }

  .search-icon {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    color: gray;
  }

  .search-input {
    border: none;
    outline: none;
    background: transparent;
    flex-grow: 1;
    font-size: 14px;
    color: #333;
  }

  .search-input::placeholder {
    color: gray;
    font-style: italic;
  }
</style>
