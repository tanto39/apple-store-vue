import { Product } from '@/types/Product';
import { BASE_URL } from "./BaseUrl";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}api/products/`);
  if (!response.ok) throw new Error('Failed to fetch products');
  const data: Product[] = await response.json();

  return data.map((product: Product) => ({
    ...product,
    images: product.images.map(image => 
      image.startsWith('http') ? image : BASE_URL+image
    )
  }));
};