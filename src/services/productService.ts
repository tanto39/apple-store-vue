import { Product } from '@/types/Product';
import { BASE_URL } from "./BaseUrl";

export const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}api/products/${productId}`);
  if (!response.ok) throw new Error('Product not found');

  const product: Product = await response.json();
  
  return {
    ...product,
    characteristics: product.characteristics?.map(characteristic => 
      characteristic.unit_type !== 'значение' ? characteristic : { ...characteristic, unit_type: '' }
    ),
    images: product.images.map(image => 
      image.startsWith('http') ? image : BASE_URL+image
    )
  };
};