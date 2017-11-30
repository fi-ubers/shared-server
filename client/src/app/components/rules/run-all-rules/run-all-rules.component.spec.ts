import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunAllRulesComponent } from './run-all-rules.component';

describe('RunAllRulesComponent', () => {
  let component: RunAllRulesComponent;
  let fixture: ComponentFixture<RunAllRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunAllRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunAllRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
