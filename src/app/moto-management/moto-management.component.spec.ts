import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoManagementComponent } from './moto-management.component';

describe('MotoManagementComponent', () => {
  let component: MotoManagementComponent;
  let fixture: ComponentFixture<MotoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoManagementComponent ]
    })
    .compileComponents();
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
