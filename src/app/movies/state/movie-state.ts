import {Movie} from '../../interfaces/movie';



export interface MovieState{
  movies: Movie[];
  movieDetails: Movie;
}

export const initialMovieState: MovieState = {
  movies: null,
  movieDetails: null
};
