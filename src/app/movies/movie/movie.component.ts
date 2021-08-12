
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie}  from 'src/app/interfaces/movie';

const IMG_PATH: string = 'https://image.tmdb.org/t/p/w500/'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

 @Output() myCustomEvent = new EventEmitter();

  @Input('movie')movie: Movie;
  constructor() { }

  ngOnInit(): void {
    this.movie.poster_path = IMG_PATH + this.movie.poster_path;
  }

  movieId(){
   this.myCustomEvent.emit(this.movie.id);
  }



}
