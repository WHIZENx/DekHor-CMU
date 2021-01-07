import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl40Component } from './girl40.component';

describe('Girl40Component', () => {
  let component: Girl40Component;
  let fixture: ComponentFixture<Girl40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
