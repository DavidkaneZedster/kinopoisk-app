import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
} from "../constans/actionTypes";

const favouritesReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                ...action.payload,
            };
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default favouritesReducer;
