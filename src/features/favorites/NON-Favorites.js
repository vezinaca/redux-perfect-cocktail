import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToFavorites, removeFromFavorites, selectFavorites } from "./favoriteSlice";

export function Favorites() {
    const favorites = useSelector (selectFavorites)
    const dispatch = useDispatch();
    
}