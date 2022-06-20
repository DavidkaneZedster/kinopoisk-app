import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
} from "../constans/actionTypes.js";

export const setToFavourites = () => ({
    type: ADD_TO_FAVOURITES,
    payload: "",
});

export const removeFromFavourites = () => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: "",
});
