import {Movie} from '../../interfaces/movie';



export interface MovieState{
  movies: Movie[];
}

export const initialMovieState: MovieState = {
  movies: null
};
