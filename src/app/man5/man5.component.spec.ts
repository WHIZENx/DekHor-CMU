import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Man5Component } from './man5.component';

describe('Man5Component', () => {
  let component: Man5Component;
  let fixture: ComponentFixture<Man5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Man5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Man5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
