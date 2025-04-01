export interface Characteristic {
  characteristic: string;
  unit_type: string;
  value: string;
}

export interface Product {
  id: number;
  createdAt?: string;
  price: number;
  discount_price: number | null;
  guarantee: number;
  rating: number;
  count_review: number;
  is_available: boolean;
  store_address: string | null;
  color: string;
  brand: string;
  country: string;
  category: string;
  name: string;
  quantity?: number;
  images: string[];
  characteristics?: Characteristic[];
}

export const productList: Product[] = [
  {
    id: 1,
    createdAt: "2022-03-08",
    price: 35900,
    discount_price: null,
    guarantee: 12,
    rating: 3.8,
    count_review: 23,
    is_available: true,
    store_address: null,
    color: "Белый",
    brand: "Apple",
    country: "Китай",
    category: "Смартфоны",
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    images: [
      "/images/product-card.png"
    ],
    "characteristics": [
      {
        characteristic: "Процессор",
        unit_type: "значение",
        value: "A15 Bionic"
      }
    ]
  },
  {
    id: 2,
    createdAt: "2022-03-08",
    price: 35900,
    discount_price: null,
    guarantee: 12,
    rating: 3.8,
    count_review: 23,
    is_available: true,
    store_address: null,
    color: "Белый",
    brand: "Apple",
    country: "Китай",
    category: "Смартфоны",
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A) 2",
    images: [
      "/images/product-card.png"
    ],
    "characteristics": [
      {
        characteristic: "Процессор",
        unit_type: "значение",
        value: "A15 Bionic"
      },
      {
        "characteristic": "Объем встроенной памяти",
        "unit_type": "ГБ",
        "value": "128"
      },
      {
        "characteristic": "Аккумулятор",
        "unit_type": "mAh",
        "value": "2018"
      },  
    ]
  },
  {
    id: 3,
    createdAt: "2022-03-08",
    price: 35900,
    discount_price: null,
    guarantee: 12,
    rating: 3.8,
    count_review: 23,
    is_available: true,
    store_address: null,
    color: "Белый",
    brand: "Apple",
    country: "Китай",
    category: "Смартфоны",
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A) 3",
    images: [
      "/images/product-card.png"
    ],
    "characteristics": [
      {
        characteristic: "Процессор",
        unit_type: "значение",
        value: "A15 Bionic"
      },
      {
        "characteristic": "Объем встроенной памяти",
        "unit_type": "ГБ",
        "value": "128"
      },
    ]
  },
  {
    id: 4,
    createdAt: "2022-03-08",
    price: 35900,
    discount_price: null,
    guarantee: 12,
    rating: 3.8,
    count_review: 23,
    is_available: true,
    store_address: null,
    color: "Белый",
    brand: "Apple",
    country: "Китай",
    category: "Смартфоны",
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A) 4",
    images: [
      "/images/product-card.png"
    ],
    "characteristics": [
      {
        characteristic: "Процессор",
        unit_type: "значение",
        value: "A15 Bionic"
      }
    ]
  },
  
];

export interface ProductImage {
  url: string;
  isActive?: boolean;
}

export interface DeliveryFeature {
  icon: string;
  title: string;
  subtitle: string;
}