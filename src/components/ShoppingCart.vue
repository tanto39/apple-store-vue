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
import { defineComponent, ref } from "vue";
import type { Product } from "../types/Product";
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
    const products = ref<Product[]>([
      {
        id: "1",
        title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
        sku: "#25139526913984",
        price: "1399",
        image: "/images/product-card.png",
        quantity: 1,
      },
      {
        id: "2",
        title: "AirPods Max Silver",
        sku: "#53459358345",
        price: "549",
        image: "/images/product-card.png",
        quantity: 1,
      },
      {
        id: "3",
        title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
        sku: "#63632324",
        price: "399",
        image: "/images/product-card.png",
        quantity: 1,
      },
    ]);

    const handleQuantityChange = (event: QuantityChangeEvent) => {
      const index = products.value.findIndex((p) => p.id === event.productId);
      if (index !== -1) {
        products.value[index].quantity = event.quantity;
      }
    };

    const handleRemove = (productId: string) => {
      products.value = products.value.filter((p) => p.id !== productId);
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
