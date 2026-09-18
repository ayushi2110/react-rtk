import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addIteam: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
  },
});

export const { addIteam, removeItem } = addToCart.actions;
export default addToCart.reducer;
