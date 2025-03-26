<template>
  <div class="container">
    <ShoppingCart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default defineComponent({
  name: "Cart",
  components: { ShoppingCart },
});
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1120px;
  margin: 112px auto;
  gap: 48px;
}
</style>
