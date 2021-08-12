import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../Services/movie.service';
import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
// @ts-ignore
export class MoviesComponent implements OnInit {
  movies: Movie[];
  theather: Movie[];
  message: string = null;
  searchedMovies: Movie[];
  constructor(private movieService: MovieService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
      console.log(this.actRoute.snapshot.queryParams.id);



      this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data.slice(0, 6);
    });

      this.movieService.getInTheather().subscribe(data => {
      this.theather = data.slice(0, 6);
    });
  }

  // tslint:disable-next-line:typedef
  buttonFromChild(event){
    console.log(event);
    this.message = event;
    console.log(this.message);
    }

}
