import { IGenre } from './../shared/models/genre.model';
import { ImovieApi } from './../shared/models/movieApi.model';
import { MovieService } from './../shared/services/movie.service';
import { listMovies } from './../shared/data/list.movies';
import { IMovie } from './../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';
import { IlistMovies } from '../shared/models/movieApi.model';
import { GenreService } from '../shared/services/genre.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  title = 'Filmes';
  testList: Array<IMovie> = listMovies;
  movieList: IlistMovies;
  genres: string[] = [];

  constructor(
    private alertController: AlertController,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private toastController: ToastController,
    private dataService: DataService,
    private movieService: MovieService,
    private route: Router,
    private genreService: GenreService,
  ) {}

  ngOnInit() {
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

  getMovie(event: any) {
    const search = event.target.value;
    if(search && search.trim() !== ''){
      this.movieService.getMovies(search).subscribe(
        data => {
          console.log(data);
          this.movieList = data;
        }
      );
    }

  }

  showMovie(movie: ImovieApi) {
    this.dataService.saveData('filme', movie);
    this.route.navigateByUrl('/data-movie');
  }





  async showFavoriteAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente incluir como favorito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'my-custom-class',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confimar favorito!',
          handler: () => {
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }
}
