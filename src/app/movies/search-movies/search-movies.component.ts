import {Movie} from 'src/app/interfaces/movie';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {searchedMoviesList} from '../selectors/movies-selectors';
import * as actions from '../actions/movies-action';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  searchedMovies: Movie[];

  searchTitle: string;
  constructor(private store: Store<IAppState>, private router: Router, private acR: ActivatedRoute) {
  this.searchTitle = this.acR.snapshot.queryParams['id'];

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (this.searchTitle && this.searchTitle !== '') {
      this.store.dispatch(new actions.SearchMovies(this.searchTitle));
    }

    this.store.pipe(select(searchedMoviesList)).subscribe(data => {
      if (data){
        this.searchedMovies = data;
      }
    });
  }



}
