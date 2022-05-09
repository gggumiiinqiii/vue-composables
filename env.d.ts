/// <reference types="vite/client" />

type Product = {
  id: number;
  name: string;
  price: number;
  stock?: number;
  [key: string]: any;
};

type CartItem = {
  productId: number;
  //数量
  quantity: number;
  name: string;
  price: number;
};
