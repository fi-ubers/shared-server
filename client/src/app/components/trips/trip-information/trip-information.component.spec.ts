import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInformationComponent } from './trip-information.component';

describe('TripInformationComponent', () => {
  let component: TripInformationComponent;
  let fixture: ComponentFixture<TripInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
