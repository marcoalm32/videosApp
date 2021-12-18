import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IlistMovies } from '../models/movieApi.model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private language = 'pt-BR';
  private region = 'BR';

  private apiUrl = `${environment.baseUrl}`;
  private key = `?api_key=a3698c0c5a6eb8a816fad2e05d328408`;
  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  getMovies(search: string): Observable<IlistMovies> {
    const url = `${this.apiUrl}search/movie${this.key}&language=${this.language}&region=${this.region}&query=${search}`;
    return this.http.get<IlistMovies>(url).
      pipe(
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
