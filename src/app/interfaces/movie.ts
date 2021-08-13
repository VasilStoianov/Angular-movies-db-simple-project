import { MovieGenres } from './movieGenres';
export interface Movie {
  id: number;
  poster_path: string;
 title: string;
 release_date: string;
 overview: string;
 genres: MovieGenres[];
}


