import {initialMovieState, MovieState} from '../state/movie-state';
import {EMovieAction, MoviesActions} from '../actions/movies-action';



export const movieReducer = (
  state = initialMovieState,
  action: MoviesActions
): MovieState => {
  switch (action.type){
    case EMovieAction.SearchMoviesSuccess: {
      return {
        ...state,
        movies: action.payload
      };
    }
  }
};
