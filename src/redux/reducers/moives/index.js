import { ActionTypes } from "../../actions/action-types";

const initialState = {
   movies: [],
   movie: {},
};

export const movieReducer = (state = initialState, { type, playload }) => {
   // eslint-disable-next-line default-case
   switch (type) {
      case ActionTypes.FETCH_MOVIES:
         return {
            ...state,
            movies: playload,
         };
      case ActionTypes.SELECTED_MOVIE:
         return {
            ...state,
            movie: playload,
         };
      default:
         return state;
   }
};
