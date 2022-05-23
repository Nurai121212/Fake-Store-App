import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/reducer';

export const store = configureStore({
    reducer: {
        cart: cart
    }
  })