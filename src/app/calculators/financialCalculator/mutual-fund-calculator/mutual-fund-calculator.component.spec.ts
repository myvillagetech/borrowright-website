import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundCalculatorComponent } from './mutual-fund-calculator.component';

describe('MutualFundCalculatorComponent', () => {
  let component: MutualFundCalculatorComponent;
  let fixture: ComponentFixture<MutualFundCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualFundCalculatorComponent]
    });
    fixture = TestBed.createComponent(MutualFundCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
