import { initialMovieState } from './../state/movie-state';
import { GetMovieDetailsSuccess } from './../actions/movies-action';
import { MovieState} from '../state/movie-state';
import {EMovieAction, MoviesActions} from '../actions/movies-action';


export const movieReducer = (
  state = initialMovieState,
  action: MoviesActions
): MovieState => {
  switch (action.type) {
    case EMovieAction.SearchMoviesSuccess: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case EMovieAction.GetMovieDetailsSuccess: {
      return{
        ...state,
        movieDetails: action.payload
      }
    }
    case EMovieAction.RemoveMovieFromStore:{
      return
       initialMovieState

    }

    case EMovieAction.GetInTheatherSuccess: {
      return{
        ...state,
        movies: action.payload
      }
    }

    case EMovieAction.GetPopularrSuccess: {
      return{
        ...state,
        movies: action.payload
      }
    }
    default:
        return state;
  }
};
