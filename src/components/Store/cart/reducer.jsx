import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    setItemsInCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(elem => elem.id === action.payload.id);

      if(itemIndex < 0){
        const newItem = {
          ...action.payload,
          quantity: 1
        }

        state.cartItems.push(newItem);
      }else{
        const newItem = {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity + 1
        }

        const newCart = state.cartItems.slice();
        newCart.splice(itemIndex, 1, newItem);
        state.cartItems = newCart;
      }
    },
    deleteItemsFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    }
  }
})

export const { setItemsInCart, deleteItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;