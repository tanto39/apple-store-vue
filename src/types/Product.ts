export interface Product {
  id: string;
  image: string;
  altText?: string;
  title: string;
  price: string;
  sku?: string;
  quantity?: number;
}

export interface ProductImage {
  url: string;
  isActive?: boolean;
}

export interface Specification {
  icon: string;
  label: string;
  value: string;
}

export interface DeliveryFeature {
  icon: string;
  title: string;
  subtitle: string;
}