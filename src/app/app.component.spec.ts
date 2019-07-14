import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SharedTest } from './shared/module/shared-test';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(SharedTest.ALL).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-moto-track'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-moto-track');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to your motorbike managment!');
  });

  it('should get motos', async(async() => {
    const app = fixture.debugElement.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
    expect(app.motoTable.rows.length).toEqual(2);
    expect(app.motoTable.rows[1].brand).toEqual("Kawasaki");
    expect(app.motoTable.rows[0].brand).toEqual("Honda");
  }));
});
