import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataMoviePage } from './data-movie.page';

const routes: Routes = [
  {
    path: '',
    component: DataMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMoviePageRoutingModule {}
