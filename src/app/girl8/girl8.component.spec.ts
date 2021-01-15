import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl8Component } from './girl8.component';

describe('Girl8Component', () => {
  let component: Girl8Component;
  let fixture: ComponentFixture<Girl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
