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
  constructor(private modalService: NgbModal,private store: Store<IAppState>) {}
  ngOnInit(): void {

  }


  open() {
    console.log(this.movie, 'from movies details component');
    console.log(this.movieId);


    if (this.movieId && this.movieId !== '') {
      this.store.dispatch(new actions.GetMovieDetails(this.movieId));
    }

    this.store.pipe(select(movieDetails)).subscribe(data => {
      console.log(data, ' data from movies details component');
      if (data){
        this.movie = data;
        console.log(this.movie, 'after init data');
        const modalRef = this.modalService.open(NgbdModalContent);
    console.log(modalRef.componentInstance.movie,'from modaRef');
    modalRef.componentInstance.movie = this.movie;
    this.ngOnDestroy();

        }
    });
  }

  ngOnDestroy(){

  }

}


