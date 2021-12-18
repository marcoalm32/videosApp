import { IGenreList } from './../models/genre.model';
import { toastController } from '@ionic/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IGenre } from '../models/genre.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private language = 'pt-BR';
  private region = 'BR';

  private apiUrl = `${environment.baseUrl}`;
  private key = `?api_key=a3698c0c5a6eb8a816fad2e05d328408`;
  constructor(
    private http: HttpClient,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private toastController: ToastController
  ) { }

  searchGenres(): Observable<IGenreList> {
    const url = `${this.apiUrl}genre/movie/list${this.key}&language=${this.language}&region=${this.region}`;
    return this.http.get<IGenreList>(url)
      .pipe(
        map(response => response),
        catchError(error => this.showError(error))
      );
  }

  async showError(error) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
