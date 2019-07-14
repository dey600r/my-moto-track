import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoManagementComponent } from './moto-management.component';

import { SharedTest } from '../shared/module/shared-test';

describe('MotoManagementComponent', () => {
  let component: MotoManagementComponent;
  let fixture: ComponentFixture<MotoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(SharedTest.ALL).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
