import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer.js";

export default combineReducers({
    favourite: favouritesReducer,
});
