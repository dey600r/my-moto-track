import { Component } from '@angular/core';
import { ReturnModel } from './shared/model/common.model';
import { MotoServiceModel } from './shared/model/motos.model';
import { MotosService } from './shared/service/motos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-moto-track';

  motoTable: ReturnModel = new ReturnModel([], [], false, false);
  motoTable1: ReturnModel = new ReturnModel([], [], false, false);

  mService: MotoServiceModel[] = [];
  cols: any[];

  constructor(private motosService: MotosService) { 
  }

  ngOnInit() {
    this.cols = [
      { field: 'brand', header: 'brand' },
      { field: 'model', header: 'model' },
      { field: 'year', header: 'year' }
    ];
    this.motosService.getListMotos().subscribe(motos => {
      this.motoTable = new ReturnModel(motos, this.cols, false, true, true, true, true);
    });  
    this.motosService.getListMotos1("2").subscribe(motos => {
      this.motoTable1 = new ReturnModel(motos, this.cols, false, true, true, true, true);
    });   

  // HOLA GIT
  }


  manageOutput(event: any) {

  }

}
