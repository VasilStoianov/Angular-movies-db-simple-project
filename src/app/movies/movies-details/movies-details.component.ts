import { Subscription } from 'rxjs';
import { GetMovieDetails, RemoveMovieFromStore } from './../actions/movies-action';
import { Movie } from 'src/app/interfaces/movie';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../state/app.state';
import * as actions from '../actions/movies-action';
import { movieDetails } from '../selectors/movies-selectors';
import {select, Store,StoreModule} from '@ngrx/store';
import { NgbdModalContent } from './movies-modal/movies-modal'


@Component({
  selector: 'app-movies-modal',
  templateUrl: './movies-details.component.html'
})
export class MoviesDetailsComponent implements OnInit,OnDestroy {
 @Input('movieId') movieId: string
  movie: Movie;
  movieSubs$: Subscription;
  constructor(private modalService: NgbModal,private store: Store<IAppState>) {}
  ngOnInit(): void {

  }


  open() {
    if (this.movieId && this.movieId !== '') {
      this.store.dispatch(new actions.GetMovieDetails(this.movieId));
    }
   this.movieSubs$ = this.store.pipe(select(movieDetails)).subscribe(data => {
      if (data){
        this.movie = data;
        const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.movie = this.movie;
    this.ngOnDestroy();
        }
    });
  }

  ngOnDestroy(){

  }

}


