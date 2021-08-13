import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {MovieState} from '../state/movie-state';


const searchedMovies = (state: IAppState) => state.movies;

export const searchedMoviesList = createSelector(
  searchedMovies, (state: MovieState) => state.movies
);

export const movieDetails = createSelector(
  searchedMovies,
  (state: MovieState) => state.movieDetails
);

export const getPopularList = createSelector(
  searchedMovies, (state: MovieState) => state.movies
);

export const getInTheatherList = createSelector(
  searchedMovies, (state: MovieState) => state.movies
);
