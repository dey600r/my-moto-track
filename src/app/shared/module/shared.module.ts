import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

import { AppRoutingModule } from '../../app-routing.module';

import { TableModule } from 'primeng/table';

import { MotoServiceComponent } from '../../moto-service/moto-service.component';
import { MotoManagementComponent  } from '../../moto-management/moto-management.component';

import { MotosService } from '../service/motos.service'

@NgModule({
  declarations: [MotoServiceComponent, MotoManagementComponent],
  exports: [MotoServiceComponent, MotoManagementComponent],
  imports: [
    BrowserModule, CommonModule, FormsModule, TableModule, AppRoutingModule, ButtonModule
  ],
  providers: [MotosService],
  bootstrap: [MotoServiceComponent, MotoManagementComponent]
})
export class SharedModule { }