import { Router } from '@angular/router';
import { IMovie } from './../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-data-movie',
  templateUrl: './data-movie.page.html',
  styleUrls: ['./data-movie.page.scss'],
})
export class DataMoviePage implements OnInit {

  movie: IMovie;
  textBack = 'Voltar';
  constructor(
    private dataService: DataService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.movie = this.dataService.getData('filme');
    const dataMovie = JSON.stringify(this.movie);
    console.log(`Filme Enviado ${dataMovie}`);
  }

}
