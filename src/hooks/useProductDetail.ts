import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchProduct } from "@/services/productService";
import { Product } from "@/types/Product";

export const useProductDetail = () => {
  const route = useRoute();
  const product = ref<Product>({} as Product);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const loadProduct = async () => {
    try {
      isLoading.value = true;
      const productId = parseInt(route.params.id as string, 10);
      product.value = await fetchProduct(productId);
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to load product";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(loadProduct);

  return {
    product,
    isLoading,
    error
  };
};
