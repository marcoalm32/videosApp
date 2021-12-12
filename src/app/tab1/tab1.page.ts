import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertController: AlertController
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
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
