import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface basketType {
  cartItems:
    | { name: string; price: number; category: string; qty: number }[]
    | null;
}

const initialState: basketType = {
  cartItems: null,
};

export const basketSlice = createSlice({
  name: "basket",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {},
    decreaseQty: (state, action: PayloadAction<number>) => {},
    increaseQty: (state, action: PayloadAction<number>) => {},
  },
});

export const { addToCart, decreaseQty, increaseQty } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
