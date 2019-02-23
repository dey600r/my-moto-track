import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';
import { MotoServiceComponent } from './moto-service.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [MotoServiceComponent],
  imports: [
    BrowserModule, CommonModule, FormsModule, TableModule, AppRoutingModule
  ],
  providers: [MotoServiceComponent],
  bootstrap: [MotoServiceComponent]
})
export class MotoServiceModule { }
