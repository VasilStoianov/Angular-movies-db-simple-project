import { getPopularList, getInTheatherList } from './selectors/movies-selectors';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../Services/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Movie} from '../interfaces/movie';
import { IAppState } from './state/app.state';
import { select, Store } from '@ngrx/store';
import * as actions from './actions/movies-action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
// @ts-ignore
export class MoviesComponent implements OnInit,OnDestroy {
  movies: Movie[];
  theather: Movie[];
  moviesSubscribtion$: Subscription;
  theatherSubscribtion$: Subscription;
  constructor(private store: Store<IAppState>) {


  }

  ngOnInit(): void {

      this.store.dispatch(new actions.GetPopular());


  this.moviesSubscribtion$ = this.store.pipe(select(getPopularList)).subscribe(data => {
      if (data){
        this.movies = data;
      }
    });
      this.store.dispatch(new actions.GetInTheather());

   this.theatherSubscribtion$ = this.store.pipe(select(getInTheatherList)).subscribe(data => {
      if (data){
        this.theather = data;
      }
    });
  }

  ngOnDestroy(){
    this.moviesSubscribtion$.unsubscribe();
    this.theatherSubscribtion$.unsubscribe();
  }

}
