import {Movie} from 'src/app/interfaces/movie';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieService } from './../../Services/movie.service';
import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {searchedMoviesList} from '../selectors/movies-selectors';
import {SearchMovies} from '../actions/movies-action';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  users$ = this.store.pipe(select(searchedMoviesList));

  constructor(private store: Store<IAppState>, private router: Router, private acR: ActivatedRoute) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log(this.acR.snapshot.queryParams);
   // this.store.dispatch(new SearchMovies(this.acR.snapshot.queryParams.get('')));
  }



}
