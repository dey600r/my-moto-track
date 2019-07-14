import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MotoServiceModel, MotoModel } from '../model/motos.model';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  url: string = '';

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }
  

  getListMotos(): Observable<any> {
    return this.http.get(this.url + '/motos?_sort=id&_order=desc');
  }
}
