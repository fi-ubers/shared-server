import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInformationComponent } from './cars-information.component';

describe('CarsInformationComponent', () => {
  let component: CarsInformationComponent;
  let fixture: ComponentFixture<CarsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
