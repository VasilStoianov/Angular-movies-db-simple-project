
import {Action} from '@ngrx/store';
import {Movie} from '../../interfaces/movie';


export enum EMovieAction {
  SearchMovies = '[Movie] Search movies',
  SearchMoviesSuccess = '[Movie] Search movies success',
  GetMovieDetails = '[Movie] Get details',
  GetMovieDetailsSuccess = '[Movie] Get details success',
  RemoveMovieFromStore = '[Movie] Remove'
}

export class SearchMovies implements Action{
  public readonly type = EMovieAction.SearchMovies;
  constructor(public filter: string) {console.log(filter);
  }
}

export class SearchMoviesSuccess implements Action{
  public readonly type = EMovieAction.SearchMoviesSuccess;
  constructor(public payload: Movie[]) {}
}

export class GetMovieDetails implements Action{
  public readonly type = EMovieAction.GetMovieDetails;
  constructor(public id: string){}
}

export class GetMovieDetailsSuccess implements Action{
  public readonly type = EMovieAction.GetMovieDetailsSuccess;
  constructor(public payload: Movie){
    console.log(payload,'fromm action payload');

  }
}
export class RemoveMovieFromStore implements Action{
  public readonly type = EMovieAction.RemoveMovieFromStore;
  constructor(){  }
}

export type MoviesActions = SearchMovies | SearchMoviesSuccess | GetMovieDetails |  GetMovieDetailsSuccess | RemoveMovieFromStore;
