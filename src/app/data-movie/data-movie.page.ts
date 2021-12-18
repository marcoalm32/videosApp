import { GenreService } from './../shared/services/genre.service';
import { ImovieApi } from './../shared/models/movieApi.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-data-movie',
  templateUrl: './data-movie.page.html',
  styleUrls: ['./data-movie.page.scss'],
})
export class DataMoviePage implements OnInit {

  movie: ImovieApi;
  textBack = 'Voltar';
  genres: string[] = [];
  constructor(
    private dataService: DataService,
    private route: Router,
    private genreService: GenreService,
  ) { }

  ngOnInit() {
    this.getMovie();

    this.getGenres();
  }

  getGenres() {
    this.genreService.searchGenres().subscribe(
      (data) => {
        data.genres.forEach(genre => {
          this.genres[genre.id] = genre.name;
        });
      }
    );
  }

  getMovie() {
    this.movie = this.dataService.getData('filme');
    const dataMovie = JSON.stringify(this.movie);
    console.log(`Filme Enviado ${dataMovie}`);
  }

}
