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


  mService: MotoServiceModel[] = [];
  cols: any[];

  constructor(private motosService: MotosService) { }

  ngOnInit() {
      this.mService = this.motosService.getListMotos();

      this.cols = [
          { field: 'brand', header: 'brand' },
          { field: 'model', header: 'model' },
          { field: 'year', header: 'year' }
      ];

      this.motoTable = new ReturnModel(this.mService.map(x => x.motos), this.cols, false, true, true, true, true);
      
  }


  manageOutput(event: any) {

  }

  handleClick(event: any) {
    var res = this.motosService.pruebaTestMock();
  }
}
