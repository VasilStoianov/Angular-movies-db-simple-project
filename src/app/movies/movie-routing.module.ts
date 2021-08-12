import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MoviesComponent } from './movies.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MoviesComponent
  },
  {
    path: 'searchMovie', component: SearchMoviesComponent
  },
  {
    path: 'movies', component: MoviesComponent
  }
];


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
