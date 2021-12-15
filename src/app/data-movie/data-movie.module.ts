import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataMoviePageRoutingModule } from './data-movie-routing.module';

import { DataMoviePage } from './data-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataMoviePageRoutingModule
  ],
  declarations: [DataMoviePage]
})
export class DataMoviePageModule {}
