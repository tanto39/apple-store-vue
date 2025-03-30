<template>
  <section class="shopping-cart">
    <h2 class="cart-title">Shopping Cart</h2>
    <div class="cart-items">
      <template v-for="(product, index) in products" :key="product.id">
        <CartItem :product="product" @update:quantity="handleQuantityChange" @remove="handleRemove" />
        <hr v-if="index < products.length - 1" class="divider" />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product, productList } from "../types/Product";
import CartItem from "./CartItem.vue";

export interface QuantityChangeEvent {
  productId: string;
  quantity: number;
}

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartItem,
  },
  setup() {
    const products: Product[] = productList;

    const handleQuantityChange = (event: QuantityChangeEvent) => {
      // const index = products.findIndex((p) => p.id === event.productId);
      // if (index !== -1) {
      //   products.[index].quantity = event.quantity;
      // }
    };

    const handleRemove = (productId: number) => {
      //products = products.filter((p) => p.id !== productId);
    };

    return {
      products,
      handleQuantityChange,
      handleRemove,
    };
  },
});
</script>

<style scoped>
.shopping-cart {
  max-width: 536px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}

.cart-title {
  color: #000;
  font-family: Abel;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
}

.cart-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  border-radius: 15px;
}

.divider {
  width: 100%;
  height: 0.5px;
  background-color: #a3a3a3;
  border: none;
  margin: 0;
}

@media (max-width: 991px) {
  .shopping-cart {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .shopping-cart {
    padding: 16px;
  }
}
</style>
