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
  cartItems: [],
};

export const basketSlice = createSlice({
  name: "basket",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<basketItem>) => {
      state.cartItems?.push(action.payload)
    },
    decreaseQty: (state, action:PayloadAction<basketItem> ) => {
      if (action.payload.qty>1) {
        const index:number = state.cartItems?.findIndex(item=>item.id===action.payload.id)!
      if (typeof index !== 'undefined') {
        state.cartItems![index].qty=state.cartItems![index].qty-1
       }
      } else {
        const filteredArray=state.cartItems?.filter(item=>item.id!==action.payload.id)
        state.cartItems=filteredArray!
      }

    },
    increaseQty: (state, action:PayloadAction<basketItem> ) => {
      const index:number  = state.cartItems?.findIndex(item=>item.id===action.payload.id)!
     if (typeof index !== 'undefined') {
      state.cartItems![index].qty=+state.cartItems![index].qty+1 
     }
     
      
    },
  },
});

export const { addToCart, decreaseQty, increaseQty } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
