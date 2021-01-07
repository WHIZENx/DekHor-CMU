import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl6Component } from './girl6.component';

describe('Girl6Component', () => {
  let component: Girl6Component;
  let fixture: ComponentFixture<Girl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
