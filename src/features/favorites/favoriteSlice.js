import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites : []
    },
    reducers: {
        addToFavorites : (state, action) => {
            state.favorites.push({...action.payload})

            // updatedFavorites = [...state.favorites];
            // updatedFavorites.push({...action.payload}); 
            // setStorage(updatedFavorites);
            // return { favorites: updatedFavorites, done: false};
        },
        removeFromFavorites: (state, action) => {
            state.favorites.filter(favorite => favorite.idDrink !== action.payload)
            //updatedFavorites = state.favorites.filter(favorite => favorite.idDrink !== action.payload)
        },
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export const selectFavorites = state => state.favorites.favorites;
export default favoritesSlice.reducer