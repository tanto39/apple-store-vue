<template>
  <header class="header">
    <router-link to="/">
      <img alt="" src="../assets/Logo.svg" />
    </router-link>
    <div class="search-wrapper">
      <SearchInput v-model="searchQuery" />
      <SearchResults :search-query="searchQuery" @close="searchQuery = ''" />
    </div>
    <div class="header__buttons">
      <router-link to="/favorites">
        <img alt="" src="../assets/Favorite.svg" />
      </router-link>
      <router-link to="/cart">
        <img alt="" src="../assets/Cart.svg" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchResults from "./SearchResults.vue";
import { clickOutside } from '../directives/clickOutside';

export default defineComponent({
  name: "HeaderTop",
  directives: {
    clickOutside
  },
  components: {
    SearchResults,
  },
  setup() {
    const searchQuery = ref("");

    return {
      searchQuery,
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  padding: 16px 160px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b5b5b5;
  background-color: #fff;
}
.header__buttons {
  display: flex;
  width: 60px;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .header {
    padding: 16px 40px;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 16px 20px;
  }
}
</style>
