<template>
  <article class="product-item">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" width="90" height="90" />
    </div>
    <div class="product-content">
      <div class="product-info">
        <h3 class="product-name">{{ product.title }}</h3>
        <p class="product-sku">{{ product.sku }}</p>
      </div>
      <div class="product-actions">
        <QuantityControl v-model="localQuantity" @update:modelValue="updateQuantity" />
        <span class="product-price">${{ product.price }}</span>
        <button type="button" class="icon-button" @click="$emit('remove')"></button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { Product } from "../types/Product";
import QuantityControl from "./QuantityControl.vue";

export default defineComponent({
  name: "ProductItem",
  components: { QuantityControl },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  emits: ["update:quantity", "remove"],
  setup(props, { emit }) {
    const localQuantity = ref(props.product.quantity);

    watch(
      () => props.product.quantity,
      (newVal) => {
        localQuantity.value = newVal;
      }
    );

    const updateQuantity = (quantity: number) => {
      emit("update:quantity", {
        productId: props.product.id,
        quantity,
      });
    };

    return {
      localQuantity,
      updateQuantity,
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
