import { Product } from "../types/Product";

export const fetchCategoryProducts = async (categoryId: number): Promise<Product[]> => {
  const response = await fetch(`http://localhost:1452/api/category/${categoryId}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};