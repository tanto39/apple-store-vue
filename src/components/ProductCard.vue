<template>
  <article class="product-card" @click="$router.push('/product/1')">
    <div class="product-card__favorite">
      <FavoriteButton :is-active="isFavorite" @toggle="toggleFavorite" />
    </div>
    <img :src="product.images[0]" :alt="product.name" class="product-card__image" />
    <div class="product-card__content">
      <div class="product-card__info">
        <h3 class="product-card__title">{{ product.name }}</h3>
        <p class="product-card__price">${{ product.price }}</p>
      </div>
      <ButtonStore class="product-card__button" @click.stop="toggleCart">
        {{ isInCart ? "Added" : "Buy Now" }}
      </ButtonStore>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { Product } from "../types/Product";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isFavorite = ref(false);

    const isInCart = computed(() =>
      store.getters["cart/cartItems"].some((item: Product) => item.id === props.product.id)
    );

    const toggleCart = (event) => {
      event.stopPropagation();
      if (!isInCart.value) {
        store.dispatch("cart/addToCart", props.product);
      }
    };

    const toggleFavorite = (event) => {
      event.stopPropagation();
      isFavorite.value = !isFavorite.value;
    };

    return {
      isFavorite,
      isInCart,
      toggleFavorite,
      toggleCart,
    };
  },
});
</script>

<style scoped>
.product-card {
  display: flex;
  max-width: 234px;
  min-width: 200px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  border-radius: 9px;
  background-color: #f6f6f6;
  font-style: italic;
  cursor: pointer;
}

.product-card__favorite {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.product-card__image {
  width: 160px;
  height: 160px;
  object-fit: contain;
}

.product-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}

.product-card__title {
  color: #000;
  text-align: center;
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  margin: 0;
}

.product-card__price {
  color: #000;
  text-align: center;
  font-family: Abel;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.72px;
  width: 100%;
  margin: 0;
}

.product-card__button {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: #000;
  border: none;
  transition: background-color 0.3s ease;
}

.product-card__button:hover {
  background-color: #333;
}

@media (max-width: 640px) {
  .product-card__button {
    width: 100%;
    padding: 12px 32px;
  }
}
</style>
