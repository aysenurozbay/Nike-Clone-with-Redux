export type ProductType = {
  image: string;
  images: string[];
  name: string;
  price: number;
  sizes: number[];
  description: string;
  id: string;
};

export type CartProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
};

export type CartItemType = {
  product: ProductType;
  size: number;
  quantity: number;
};
