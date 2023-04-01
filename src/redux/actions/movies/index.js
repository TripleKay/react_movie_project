import { ActionTypes } from "../action-types";

export const fetchMovies = (movies) => {
   return {
      type: ActionTypes.FETCH_MOVIES,
      playload: movies,
   };
};

export const selectedMovie = (movie) => {
   return {
      type: ActionTypes.SELECTED_MOVIE,
      playload: movie,
   };
};


