import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl4Component } from './girl4.component';

describe('Girl4Component', () => {
  let component: Girl4Component;
  let fixture: ComponentFixture<Girl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
