import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripsListComponent } from './user-trips-list.component';

describe('UserTripsListComponent', () => {
  let component: UserTripsListComponent;
  let fixture: ComponentFixture<UserTripsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTripsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
