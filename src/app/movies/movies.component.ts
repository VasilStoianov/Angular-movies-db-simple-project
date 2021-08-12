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
  constructor(private movieService: MovieService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
     // console.log(this.actRoute.snapshot.queryParams.id);
      this.movieService.getPopularMovies().subscribe(data => {
        this.movies = data['results'];
    });

      this.movieService.getInTheather().subscribe(data => {
      this.theather = data['results'];

    });
  }


}
