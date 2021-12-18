import { toastController } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private toastController: ToastController,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  login(email, password) {
    if(email === 'admin@admin.com' && password === 'admin') {
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja Bem vindo', 'success');
    }else{
      this.presentToast('Erro, usuário ou senha inválida!', 'danger');
    }

  }

  async presentToast(text: string, color: string) {
    const toast = await this.toastController.create({
      message: text,
      // eslint-disable-next-line object-shorthand
      color: color,
      duration: 2000
    });
    toast.present();
  }

}
