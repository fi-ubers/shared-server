import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerResetTokenComponent } from './server-reset-token.component';

describe('ServerResetTokenComponent', () => {
  let component: ServerResetTokenComponent;
  let fixture: ComponentFixture<ServerResetTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerResetTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerResetTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
