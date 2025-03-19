<template>
  <HeaderTop />
  <router-view/>
  <FooterStore />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTop from "./components/HeaderTop.vue";
import FooterStore from "./components/FooterStore.vue";

export default defineComponent({
  components: { HeaderTop, FooterStore},
  name: "App"
})
</script>

<style>
#app {
  font: 16px ABeeZee, Abel, Helvetica, Arial, sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
