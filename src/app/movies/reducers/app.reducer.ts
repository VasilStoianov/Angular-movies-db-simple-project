import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {routerReducer} from '@ngrx/router-store';
import {movieReducer} from './moive.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  movies: movieReducer
};
