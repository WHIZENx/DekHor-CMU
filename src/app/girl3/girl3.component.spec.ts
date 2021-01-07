import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl3Component } from './girl3.component';

describe('Girl3Component', () => {
  let component: Girl3Component;
  let fixture: ComponentFixture<Girl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
