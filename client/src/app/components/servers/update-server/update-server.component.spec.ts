import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServerComponent } from './update-server.component';

describe('UpdateServerComponent', () => {
  let component: UpdateServerComponent;
  let fixture: ComponentFixture<UpdateServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
