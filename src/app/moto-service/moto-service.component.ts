import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { MotoServiceModel } from '../shared/model/motos.model';
import { MotosService } from '../shared/service/motos.service';
import { ReturnModel, ConfigurationModal } from '../shared/model/common.model';

@Component({
  selector: 'app-moto-service',
  styleUrls: ['./moto-service.component.css'],
  templateUrl: './moto-service.component.html'
})
export class MotoServiceComponent implements OnInit {

  @Input('inputTable') inputModel: ReturnModel = new ReturnModel([], [], false, false);
  @Output() outputModel = new EventEmitter();

  rows: any[] =[];
  cols: any[] = [];
  conf: ConfigurationModal = new ConfigurationModal(false, false);

  constructor(private motosService: MotosService) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChange) {
      if(this.inputModel.rows.length > 0) {
        this.rows = this.inputModel.rows;
        this.cols = this.inputModel.columns;
        this.conf = this.inputModel.config;
      }
    }

}
