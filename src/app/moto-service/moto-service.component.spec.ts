import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoServiceComponent } from './moto-service.component';

describe('MotoServiceComponent', () => {
  let component: MotoServiceComponent;
  let fixture: ComponentFixture<MotoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoServiceComponent ]
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
