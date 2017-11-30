import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleInformationComponent } from './rule-information.component';

describe('RuleInformationComponent', () => {
  let component: RuleInformationComponent;
  let fixture: ComponentFixture<RuleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
