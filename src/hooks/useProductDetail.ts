import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { fetchProduct } from "@/services/productService";
import { Product } from "@/types/Product";
import type { ProductImage } from "../types/Product";

export const useProductDetail = () => {
  const store = useStore();
  const route = useRoute();
  const product = ref<Product>({} as Product);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const mainImage = ref("");
  const images = ref<ProductImage[]>([]);

  const loadProduct = async () => {
    try {
      isLoading.value = true;
      const productId = parseInt(route.params.id as string, 10);
      product.value = await fetchProduct(productId);
      mainImage.value = product.value.images[0];
      images.value = product.value.images.map((image, i) => ({
        url: image,
        isActive: i === 0,
      }));
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to load product";
    } finally {
      isLoading.value = false;
    }
  };

  const isInCart = computed(() =>
    store.getters["cart/cartItems"].some((item: Product) => item.id === product.value.id)
  );

  const isFavorite = computed(() => store.getters["favorites/isFavorite"](product.value.id));

  const handleAddToWishlist = () => {
    if (isFavorite.value) {
      store.commit("favorites/REMOVE_FAVORITE", product.value.id);
    } else {
      store.commit("favorites/ADD_FAVORITE", product.value.id);
    }
  };

  const handleAddToCart = () => {
    store.dispatch("cart/addToCart", product.value);
  };

  const handleImageSelect = (index: number) => {
    images.value = images.value.map((thumb, i) => ({
      ...thumb,
      isActive: i === index,
    }));
    mainImage.value = images.value[index].url;
  };

  onMounted(loadProduct);

  return {
    product,
    images,
    isInCart,
    isFavorite,
    mainImage,
    isLoading,
    error,
    handleImageSelect,
    handleAddToWishlist,
    handleAddToCart,
  };
};
