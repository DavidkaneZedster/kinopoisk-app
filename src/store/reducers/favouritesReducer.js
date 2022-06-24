import {
    REMOVE_FROM_FAVOURITES,
    SET_FAVOURITES,
} from "../constans/actionTypes";

const initialState = {
    favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITES:
            return {
                ...state,
                favourites: [
                    ...state.favourites.filter(
                        (item) => item !== action.payload
                    ),
                    action.payload,
                ],
            };
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(
                    (item) => item !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default favouritesReducer;
