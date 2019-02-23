import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoServiceComponent } from './moto-service/moto-service.component';
import { MotoManagementComponent } from './moto-management/moto-management.component';
import { ButtonModule } from 'primeng/button';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    MotoServiceComponent,
    MotoManagementComponent
  ],
  imports: [
    BrowserModule, TableModule,
    AppRoutingModule, ButtonModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
