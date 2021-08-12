
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '', pathMatch: 'full', redirectTo: '/movies'

},
{
  path: 'movies',
  loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
