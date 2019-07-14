import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MotoServiceModel, MotoModel } from '../model/motos.model';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  url: string = 'http://localhost:5000';
  urlTEST: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }
  

  getListMotos(): Observable<any> {
    return this.http.get(this.url + '/motos?_sort=id&_order=desc');
    // let result: MotoServiceModel[] = [];
    // let testMotoServ: MotoServiceModel = new MotoServiceModel();
    
    // let motoTest: MotoModel = new MotoModel();
    // motoTest.brand = "Yamaha"
    // motoTest.model = "R6";
    // motoTest.year = 2005;
    // testMotoServ.motos =  motoTest;
    // result = [...result, testMotoServ];
    // testMotoServ = new MotoServiceModel();
    // motoTest = new MotoModel()
    // motoTest.brand = "Hyosung"
    // motoTest.model = "gtr 125";
    // motoTest.year = 2006;
    // testMotoServ.motos =  motoTest;
    // result = [...result, testMotoServ];
    // return result;

  }

  pruebaTestMock(): Observable<any> {
    this.http.post(this.url + '/author', {
    "id": 3,
    "age": 'Fred',
    "name": 'Blair'
    }); 

    return this.http.get(this.url + '/motos?_sort=id&_order=desc');
  }
}
