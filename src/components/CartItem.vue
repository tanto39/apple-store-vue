<template>
  <article class="product-item">
    <div class="product-image">
      <img :src="product.images[0]" :alt="product.name" width="90" height="90" />
    </div>
    <div class="product-content">
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-sku">#{{ product.id }}</p>
      </div>
      <div class="product-actions">
        <QuantityControl v-model="quantity" />
        <span class="product-price">${{ product.price }}</span>
        <button 
          type="button" 
          class="icon-button" 
          @click="handleRemove"
        ></button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import type { Product } from "../types/Product";
import QuantityControl from "../components/UI/QuantityControl.vue";
import { QuantityChangeEvent } from "../types/Cart";

export default defineComponent({
  name: "CartItem",
  components: { QuantityControl },
  props: {
    product: {
      type: Object as () => Product & { quantity: number },
      required: true,
    },
  },
  emits: ["update:quantity", "remove"],
  setup(props, { emit }) {
    const store = useStore();

    const quantity = computed({
      get: () => props.product.quantity,
      set: (value) => {
        const payload: QuantityChangeEvent = {
          productId: props.product.id,
          quantity: value
        };
        store.dispatch("cart/updateQuantity", payload);
      }
    });

    const handleRemove = () => {
      store.dispatch("cart/removeFromCart", props.product.id);
    };

    return {
      quantity,
      handleRemove
    };
  },
});
</script>

<style scoped>
.product-item {
  display: flex;
  padding: 16px 0;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.product-image {
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
}

product-image__img {
  width: 100%;
}

.product-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 0;
  flex: 1;
}

.product-info {
  display: flex;
  min-width: 106px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
}

.product-name {
  width: 100%;
  color: #000;
  font-family: ABeeZee;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

.product-sku {
  width: 100%;
  color: #000;
  font-family: Abel;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}

.product-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}

.product-price {
  color: #000;
  font-family: ABeeZee;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.6px;
}
.icon-button {
  background: url("../assets/Close.svg") center center no-repeat;
  height: 24px;
  width: 24px;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>
