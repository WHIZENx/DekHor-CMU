import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Man3Component } from './man3.component';

describe('Man3Component', () => {
  let component: Man3Component;
  let fixture: ComponentFixture<Man3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Man3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Man3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
