import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunIndividualRuleComponent } from './run-individual-rule.component';

describe('RunIndividualRuleComponent', () => {
  let component: RunIndividualRuleComponent;
  let fixture: ComponentFixture<RunIndividualRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunIndividualRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunIndividualRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
