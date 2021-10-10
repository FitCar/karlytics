import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducer: {
    addToBasket: (state, action) => {
      basket = [...state.basket, action.item]
    },
  },
});

export const { addToBasket } = basketSlice.actions

export const selectBasket = (state) => state.basket.basket

export default basketSlice.reducer
