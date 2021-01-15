import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl1Component } from './girl1.component';

describe('Girl1Component', () => {
  let component: Girl1Component;
  let fixture: ComponentFixture<Girl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
