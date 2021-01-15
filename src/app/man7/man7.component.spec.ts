import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Man7Component } from './man7.component';

describe('Man7Component', () => {
  let component: Man7Component;
  let fixture: ComponentFixture<Man7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Man7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Man7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
