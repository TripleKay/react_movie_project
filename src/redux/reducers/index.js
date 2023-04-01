// to compile all other reducers
import { combineReducers } from "redux";
import { movieReducer } from "./moives";

const reducers = combineReducers({
    movies: movieReducer
});

export default reducers;
