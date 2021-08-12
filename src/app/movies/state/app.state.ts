import {RouterReducerState} from '@ngrx/router-store';
import {MovieState} from './movie-state';

export interface IAppState{
  router?: RouterReducerState;
  movies: MovieState;
}

export const initialAppState: IAppState = {
  movies: null
};

export function getInitialState(): IAppState{
  return initialAppState;
}
