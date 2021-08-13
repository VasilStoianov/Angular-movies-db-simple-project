import { GetMovieDetails, GetMovieDetailsSuccess, GetInTheatherSuccess, GetPopular, GetPopularrSuccess, GetInTheather } from './../actions/movies-action';
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

  @Effect()
  // @ts-ignore
getMovieDetails$ = this.actions$.pipe(
  ofType<GetMovieDetails>(EMovieAction.GetMovieDetails),
  switchMap(({id}) => this.movieService.getMovieDetails(id).pipe(
    map(data => {
      const payload: Movie = data;
      return new GetMovieDetailsSuccess(payload);
    })
  )
));
@Effect()
    // @ts-ignore
  getInTheather$ = this.actions$.pipe(
    ofType<GetInTheather>(EMovieAction.GetInTheather),
    switchMap(() => this.movieService.getInTheather().pipe(
      map(data => {
        const payload: Movie[] = data['results'];
        return new GetInTheatherSuccess(payload);
      })
    )
  ));

  @Effect()
    // @ts-ignore
  getPopular$ = this.actions$.pipe(
    ofType<GetPopular>(EMovieAction.GetPopular),
    switchMap(() => this.movieService.getPopularMovies().pipe(
      map(data => {
        const payload: Movie[] = data['results'];
        return new GetPopularrSuccess(payload);
      })
    )
  ));

}


