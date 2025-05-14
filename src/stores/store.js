import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoritesSlice";
const store = configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
});

export default store;
