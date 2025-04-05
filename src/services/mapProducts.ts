import { Product } from "@/types/Product";
import { BASE_URL } from "./BaseUrl";

export const mapProducts = (data: Product[]) => {
  return data.map((product: Product) => ({
    ...product,
    images: mapImages(product),
  }));
};

export const mapImages = (product: Product) => {
  return product.images.length > 0
    ? product.images.map((image) => {
        if (product.id == 101 || product.id == 103) {
          // fix not existing images
          return `/images/no-image.jpg`;
        } else {
          return image.startsWith("http") ? image : BASE_URL + image;
        }
      })
    : [`/images/no-image.jpg`];
};
