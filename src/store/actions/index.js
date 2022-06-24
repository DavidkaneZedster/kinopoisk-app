import store from "../store";

import {
    REMOVE_FROM_FAVOURITES,
    SET_FAVOURITES,
} from "../constans/actionTypes.js";

export const setFavourites = (value) => (dispatch) => {
    const f = store.getState().favourite.favourites;

    if (f.some((el) => el.id === value.id)) {
        return dispatch({
            type: REMOVE_FROM_FAVOURITES,
            payload: value,
        });
    } else {
        return dispatch({
            type: SET_FAVOURITES,
            payload: value,
        });
    }
};
