import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/ProductSlice";
// import favoriteSlice from "./slices/FavoriteSlice";
import { favoriteSlice } from "./slices/Favorite";
import CartSlice from "./slices/CartSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice.reducer,
    cart: CartSlice,
  },
});