import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoServiceComponent } from './moto-service.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './../app-routing.module';

import { TableModule } from 'primeng/table';

describe('MotoServiceComponent', () => {
  let component: MotoServiceComponent;
  let fixture: ComponentFixture<MotoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MotoServiceComponent],
      imports: [
        BrowserModule, CommonModule, FormsModule, TableModule, AppRoutingModule, HttpClientModule
      ],
      providers: [MotoServiceComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
