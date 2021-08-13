import { Movie } from 'src/app/interfaces/movie';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { IAppState } from '../../state/app.state';
import { RemoveMovieFromStore } from '../../actions/movies-action';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

@Component({
  selector: 'app-movies-content',
  templateUrl:'./modal.html',
  styleUrls: ['./movies-modal.css']
})
export class NgbdModalContent implements OnInit,OnDestroy {
  @Input() movie: Movie;
  poster: string;
  constructor(public activeModal: NgbActiveModal,public store: Store<IAppState>) {  }
  ngOnInit(): void {
    this.poster = IMG_PATH + this.movie.poster_path;
  }

  removeMovie(){
    this.ngOnDestroy();

  }
  ngOnDestroy(){
      this.store.dispatch(new RemoveMovieFromStore());
    this.activeModal.close('Close click')
  }




}
