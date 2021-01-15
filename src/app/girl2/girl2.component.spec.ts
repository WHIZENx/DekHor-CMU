import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl2Component } from './girl2.component';

describe('Girl2Component', () => {
  let component: Girl2Component;
  let fixture: ComponentFixture<Girl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
