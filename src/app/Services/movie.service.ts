
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { HttpClient } from '@angular/common/http'
import {Movie} from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line:typedef
  getPopularMovies(){

   return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/popular?api_key=151398c6a95895cf859a8a939b817ce7');
  }

  // tslint:disable-next-line:typedef
  getInTheather(){
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=151398c6a95895cf859a8a939b817ce7');
  }

  // tslint:disable-next-line:typedef
  searchMovie(id: string){
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/search/movie?api_key=151398c6a95895cf859a8a939b817ce7&query=' + id)
  }

  getMovieDetails(id: string){
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/' + id + '?api_key=151398c6a95895cf859a8a939b817ce7');
  }





}
