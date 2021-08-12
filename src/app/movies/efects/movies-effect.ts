import { MovieService } from './../../Services/movie.service';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMovieAction, SearchMovies, SearchMoviesSuccess} from '../actions/movies-action';
import {of} from 'rxjs';
import {Movie} from '../../interfaces/movie';


@Injectable()
// @ts-ignore
export class MoviesEffect{
  constructor(private actions$: Actions, private movieService: MovieService){}


  @Effect()
    // @ts-ignore
  searchMovies$ = this.actions$.pipe(
    ofType<SearchMovies>(EMovieAction.SearchMovies),
    switchMap(({filter}) => this.movieService.searchMovie(filter).pipe(
      map(data => {
        const payload: Movie[] = data['results'];
        return new SearchMoviesSuccess(payload);
      })
    )
  ));

/*
  // @ts-ignore
  @Effect() getOutOfOfficeInfo$ = this.actions$.pipe(
    ofType(fromActions.getMovies),
    switchMap((action) =>
      this.movieService.searchMovie(action.sort).pipe(
        map( data => {
          // @ts-ignore
          return new fromActions.getMoviesSuccess(data);
        }))));*/

}


