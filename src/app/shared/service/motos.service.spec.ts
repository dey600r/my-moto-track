import { TestBed } from '@angular/core/testing';

import { MotosService } from './motos.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';

import { TableModule } from 'primeng/table';

describe('MotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [
      BrowserModule, CommonModule, FormsModule, TableModule, AppRoutingModule, HttpClientModule
    ],
    providers: []
  }));

  it('should be created', () => {
    const service: MotosService = TestBed.get(MotosService);
    expect(service).toBeTruthy();
  });
});
