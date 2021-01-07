import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Man4Component } from './man4.component';

describe('Man4Component', () => {
  let component: Man4Component;
  let fixture: ComponentFixture<Man4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Man4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Man4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
