import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerInformationComponent } from './server-information.component';

describe('ServerInformationComponent', () => {
  let component: ServerInformationComponent;
  let fixture: ComponentFixture<ServerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
