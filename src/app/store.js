import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import favoritesReducer from "../features/favorites/favoriteSlice";

export default configureStore({
  reducer: {
    //counter: counterReducer,
    favorites: favoritesReducer,
  },
});
