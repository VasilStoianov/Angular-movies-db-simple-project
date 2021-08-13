import { MovieComponent } from './movie/movie.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

import { MoviesComponent } from './movies.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './movie-routing.module';
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './reducers/app.reducer';
import {MoviesEffect} from './efects/movies-effect';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MovieService} from '../Services/movie.service';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NgbdModalContent } from './movies-details/movies-modal/movies-modal';



@NgModule({
  declarations: [
    MoviesComponent,
    SearchMoviesComponent,
    MovieComponent,
    MoviesDetailsComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    EffectsModule,
    EffectsModule.forRoot([MoviesEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    routing
  ],
  exports: [
    MoviesComponent,
    SearchMoviesComponent,
    MovieComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule {
  static forRoot(): ModuleWithProviders<MoviesModule> {
  return {
      ngModule: MoviesModule,
      providers: []
  };
} }
