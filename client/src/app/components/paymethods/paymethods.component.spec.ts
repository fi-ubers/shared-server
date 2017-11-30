import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodsComponent } from './paymethods.component';

describe('PaymethodsComponent', () => {
  let component: PaymethodsComponent;
  let fixture: ComponentFixture<PaymethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
