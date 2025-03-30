<template>
  <div class="container">
    <ShoppingCart />
    <OrderSummary />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default defineComponent({
  name: "Cart",
  components: { ShoppingCart, OrderSummary },
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
