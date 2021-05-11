import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from "../features/favorites/favoriteSlice";

export default configureStore({
  reducer: {
    //counter: counterReducer,
    favorites: favoritesReducer,
  },
});
