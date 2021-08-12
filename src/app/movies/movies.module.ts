import { MovieComponent } from './movie/movie.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

import { MoviesComponent } from './movies.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './movie-routing.module';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    MoviesComponent,
    SearchMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    EffectsModule,
    routing
  ],
  exports: [
    MoviesComponent,
    SearchMoviesComponent

  ]
})
export class MoviesModule {
  static forRoot(): ModuleWithProviders<MoviesModule> {
  return {
      ngModule: MoviesModule,
      providers: []
  };
} }
