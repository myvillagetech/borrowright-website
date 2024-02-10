import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDSCalculatorComponent } from './tdscalculator.component';

describe('TDSCalculatorComponent', () => {
  let component: TDSCalculatorComponent;
  let fixture: ComponentFixture<TDSCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDSCalculatorComponent]
    });
    fixture = TestBed.createComponent(TDSCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
