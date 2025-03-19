<template>
  <header class="header">
    <router-link to="/">
      <img alt="" src="../assets/Logo.svg" />
    </router-link>
    <SearchInput />
    <div class="header__buttons">
      <router-link to="/">
        <img alt="" src="../assets/Favorite.svg" />
      </router-link>
      <router-link to="/">
        <img alt="" src="../assets/Cart.svg" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "./UI/SearchInput.vue";

export default defineComponent({
  name: "HeaderTop",
  components: {
    SearchInput,
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
