import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_FAVOURITES,
} from "../constans/actionTypes.js";

export const setToFavourites = () => ({
    type: ADD_TO_FAVOURITES,
    payload: "",
});

export const removeFromFavourites = () => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: "",
});

export const setFavourites = (value) => (dispatch) => {
    return dispatch({
        type: SET_FAVOURITES,
        payload: value,
    });
};
