export type ProductType = {
  image: string;
  images: string[];
  name: string;
  price: number;
  sizes: number[];
  description: string;
};

export type CartItemType = {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
  };
  size: number;
  quantity: number;
};
