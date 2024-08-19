import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartOperation",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      return {items:[]}
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
