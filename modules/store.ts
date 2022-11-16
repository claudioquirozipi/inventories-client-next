import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import shoppingcartStore from "./shoppingcart/shoppingcart.store";

export const store = configureStore({
  reducer: {
    shoppingcart: shoppingcartStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
