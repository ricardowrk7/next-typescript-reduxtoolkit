import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { basketItem } from "../model/basketItem";
import type { RootState } from "./store";

// Define a type for the slice state
interface basketType {
  cartItems:
    | basketItem[]
    | null;
}

const initialState: basketType = {
  cartItems: null,
};

export const basketSlice = createSlice({
  name: "basket",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<basketItem>) => {},
    decreaseQty: (state, action:PayloadAction<basketItem> ) => {},
    increaseQty: (state, action:PayloadAction<basketItem> ) => {},
  },
});

export const { addToCart, decreaseQty, increaseQty } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
