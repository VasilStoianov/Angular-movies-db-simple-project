import {Action} from '@ngrx/store';
import {Movie} from '../../interfaces/movie';


export enum EMovieAction{
  SearchMovies = '[Movie] Search movies',
  SearchMoviesSuccess = '[Movie] Search movies success'
}

export class SearchMovies implements Action{
  public readonly type = EMovieAction.SearchMovies;
  constructor(public filter: string) {
  }
}

export class SearchMoviesSuccess implements Action{
  public readonly type = EMovieAction.SearchMoviesSuccess;
  constructor(public payload: Movie[]) {}
}

export type MoviesActions = SearchMovies | SearchMoviesSuccess;
