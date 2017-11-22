import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStateComponent } from './current-state.component';

describe('CurrentStateComponent', () => {
  let component: CurrentStateComponent;
  let fixture: ComponentFixture<CurrentStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
