<template>
  <HeaderTop />
  <router-view/>
  <FooterStore />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import HeaderTop from "./components/HeaderTop.vue";
import FooterStore from "./components/FooterStore.vue";

export default defineComponent({
  components: { HeaderTop, FooterStore},
  name: "App",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('allProducts/loadProducts');
    });
  }
})
</script>

<style>
* {
  font: 16px ABeeZee, Abel, Helvetica, Arial, sans-serif;
}
#app {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
