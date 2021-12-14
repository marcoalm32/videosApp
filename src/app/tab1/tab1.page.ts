import { listMovies } from './../shared/data/list.movies';
import { IMovie } from './../shared/models/movie.model';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Videos';
  movieList: Array<IMovie> = listMovies;

  constructor(
    private alertController: AlertController,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private toastController: ToastController
  ) {}

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
