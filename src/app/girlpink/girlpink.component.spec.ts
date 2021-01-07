import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlpinkComponent } from './girlpink.component';

describe('GirlpinkComponent', () => {
  let component: GirlpinkComponent;
  let fixture: ComponentFixture<GirlpinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlpinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlpinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
