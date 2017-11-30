import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterServerComponent } from './register-server.component';

describe('RegisterServerComponent', () => {
  let component: RegisterServerComponent;
  let fixture: ComponentFixture<RegisterServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
