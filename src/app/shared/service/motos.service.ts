import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MotoServiceModel, MotoModel } from '../model/motos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  url: string = 'http://localhost:3000';


  constructor(private http: HttpClient) {
    
  }
  

  getListMotos(): MotoServiceModel[] {
    let result: MotoServiceModel[] = [];
    let testMotoServ: MotoServiceModel = new MotoServiceModel();
    
    let motoTest: MotoModel = new MotoModel();
    motoTest.brand = "Yamaha"
    motoTest.model = "R6";
    motoTest.year = 2005;
    testMotoServ.motos =  motoTest;
    result = [...result, testMotoServ];
    testMotoServ = new MotoServiceModel();
    motoTest = new MotoModel()
    motoTest.brand = "Hyosung"
    motoTest.model = "gtr 125";
    motoTest.year = 2006;
    testMotoServ.motos =  motoTest;
    result = [...result, testMotoServ];
    return result;

    // return this.http.get('/showcase/resources/data/cars-small.json')
    //                 .toPromise()
    //                 .then(res => <Car[]> res.data)
    //                 .then(data => { return data; });
  }

  pruebaTestMock(): Observable<any> {
    return this.http.get(this.url + '?_sort=id&_order=desc').map(response => response.json());
  }
}
