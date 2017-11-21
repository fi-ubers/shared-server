import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleAtCommitComponent } from './rule-at-commit.component';

describe('RuleAtCommitComponent', () => {
  let component: RuleAtCommitComponent;
  let fixture: ComponentFixture<RuleAtCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleAtCommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleAtCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
