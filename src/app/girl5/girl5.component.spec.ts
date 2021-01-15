import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl5Component } from './girl5.component';

describe('Girl5Component', () => {
  let component: Girl5Component;
  let fixture: ComponentFixture<Girl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Girl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Girl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
