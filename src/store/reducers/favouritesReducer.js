import { SET_FAVOURITES } from "../constans/actionTypes";

const initialState = {
    favoutites: [],
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload,
            };
        // case REMOVE_FROM_FAVOURITES:
        //     return {
        //         ...state,
        //         favourites:action.payload,
        //     };
        default:
            return state;
    }
};

export default favouritesReducer;
