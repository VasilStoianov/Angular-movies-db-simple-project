
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {Movie} from 'src/app/interfaces/movie';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

 @Output() movieIdEmitter = new EventEmitter();

  @Input('movie')movie: Movie;
  poster: string;
  constructor() { }

  ngOnInit(): void {
    this.poster = IMG_PATH + this.movie.poster_path;
  }
  showMoviesDetails(){
    this.movieIdEmitter.emit(this.movie.id);
  }

}
