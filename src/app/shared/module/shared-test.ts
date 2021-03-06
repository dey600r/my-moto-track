import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';

import { TableModule } from 'primeng/table';

import { AppComponent } from '../../app.component';
import { MotoServiceComponent } from '../../moto-service/moto-service.component';
import { MotoManagementComponent } from '../../moto-management/moto-management.component';

import { MotosService } from '../service/motos.service';

export class SharedTest {
    static ALL = {
        declarations: [MotoServiceComponent, MotoManagementComponent, AppComponent],
        export: [MotoServiceComponent, MotoManagementComponent, AppComponent],
        imports: [
          BrowserModule, CommonModule, FormsModule, TableModule, AppRoutingModule, HttpClientModule
        ],
        providers: [MotosService]
      }
    
}
