import { createSlice } from "@reduxjs/toolkit";

// const myStorage = localStorage.getItem('favorites');
// const arrayStorage = JSON.parse(myStorage);

// drinks = JSON.parse( localStorage.getItem('drinks') );

// localStorage.setItem('favorites', JSON.stringify(favorites));

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
            //setStorage(state.favorites);
            
        },
        removeFromFavorites: (state, action) => {
            console.log("action.payload dans favoriteSlice: ", action.payload);

            // state.favorites.forEach(favorite => (
            //     console.log(favorite.idDrink);
            // ))

            //array1.forEach(element => console.log(element));

            state.favorites.forEach(favorite => console.log(" avant favorite.idDrink: ", favorite.idDrink));
            
            state.favorites.filter(favorite => favorite.idDrink !== action.payload);
            //state.cartItems.filter(item => item.id !== action.payload.id)
            
            //sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
            //localStorage.setItem('favorites', JSON.stringify(state.favorites));
            
            //console.log('apres filter dans favSlice');
            //state.favorites.forEach(favorite => console.log("apres favorite.idDrink: ", favorite.idDrink));

            //setStorage(state.favorites);

            //updatedFavorites = state.favorites.filter(favorite => favorite.idDrink !== action.payload)
            //const index = state.favorites.indexOf
        },
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export const selectFavorites = state => state.favorites.favorites;
export default favoritesSlice.reducer