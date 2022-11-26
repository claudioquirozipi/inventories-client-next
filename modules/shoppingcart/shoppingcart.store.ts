import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { ShoppingCart, ShoppingCartState } from "./shoppingcart.interface";
import { Product } from "../products/product.interface";

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
        state.shoppingCart.push({
          amount: 1,
          price: action.payload.price,
          product: action.payload,
        });
      }
      state.totalAmount += 1;
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeProdcutToShoppingCart: (state, action: PayloadAction<Product>) => {
      console.log("state.shoppingCart ", state.shoppingCart);
      console.log(
        "=> ",
        state.shoppingCart.find((sc) => sc.product.id === action.payload.id)
      );
      if (
        state.shoppingCart.find((sc) => sc.product.id === action.payload.id)
          ?.amount
      ) {
        console.log("aquí =>");
        state.shoppingCart = state.shoppingCart.map((sc) =>
          sc.product.id === action.payload.id
            ? {
                amount: sc.amount - 1,
                price: sc.price - sc.product.price,
                product: action.payload,
              }
            : sc
        );
        state.totalAmount -= 1;
        state.totalPrice -= action.payload.price;
      }
    },
    removeAllAmountProdcutToShoppingCart: (
      state,
      action: PayloadAction<ShoppingCart>
    ) => {
      state.totalAmount = state.totalAmount - action.payload.amount;
      state.totalPrice = state.totalPrice - action.payload.price;
      state.shoppingCart = state.shoppingCart.filter(
        (sc) => sc.product.id !== action.payload.product.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToShoppingCart,
  removeProdcutToShoppingCart,
  removeAllAmountProdcutToShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
