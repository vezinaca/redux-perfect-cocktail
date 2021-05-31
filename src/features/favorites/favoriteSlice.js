import { createSlice } from "@reduxjs/toolkit";

const initialStorage = localStorage.getItem('favorites') ? JSON.parse( localStorage.getItem('favorites') ) : [];

const setStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites.length > 0 ? favorites : []));
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites : initialStorage
    },
    
    reducers: {
        addToFavorites : (state, action) => {
            state.favorites.push({...action.payload})
            setStorage(state.favorites);
            
        },
        removeFromFavorites: (state, action) => {
            
            let indexToRemove; 
            state.favorites.forEach((favorite, index) => {
                if (favorite.idDrink === action.payload){
                    indexToRemove = index;
                }
                
            });
            
            state.favorites.splice(indexToRemove,1);
            setStorage(state.favorites);
            
        },
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export const selectFavorites = state => state.favorites.favorites;
export default favoritesSlice.reducer