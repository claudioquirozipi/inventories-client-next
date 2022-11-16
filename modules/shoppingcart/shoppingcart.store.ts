import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../products/product.interface";

import { ShoppingCartState } from "./shoppingcart.interface";

const initialState: ShoppingCartState = {
  totalAmount: 0,
  totalPrice: 0,
  shoppingCart: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProductToShoppingCart: (state, action: PayloadAction<Product>) => {
      if (
        state.shoppingCart.find((sc) => sc.product.id === action.payload.id)
      ) {
        console.log("if");
        state.shoppingCart = state.shoppingCart.map((sc) =>
          sc.product.id === action.payload.id
            ? {
                amount: sc.amount + 1,
                price: sc.price + sc.product.price,
                product: action.payload,
              }
            : sc
        );
      } else {
        console.log("else");
        state.shoppingCart.push({
          amount: 1,
          price: action.payload.price,
          product: action.payload,
        });
      }
      state.totalAmount += 1;
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    decrement: (state, action: PayloadAction<Product>) => {
      state.totalAmount -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToShoppingCart, decrement } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
