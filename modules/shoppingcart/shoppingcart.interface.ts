import { Product } from "../products/product.interface";

export interface ShoppingCartState {
  totalPrice: number;
  totalAmount: number;
  shoppingCart: ShoppingCart[];
}

export interface ShoppingCart {
  price: number;
  amount: number;
  product: Product;
}
