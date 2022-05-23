import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    setItemsInCart: (state, action) => {
      state.cartItems.push(action.payload)
      console.log(state.cartItems);
    }
  }
})

export const { setItemsInCart } = cartSlice.actions;
export default cartSlice.reducer;