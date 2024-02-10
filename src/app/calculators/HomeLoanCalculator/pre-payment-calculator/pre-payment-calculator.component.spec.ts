import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePaymentCalculatorComponent } from './pre-payment-calculator.component';

describe('PrePaymentCalculatorComponent', () => {
  let component: PrePaymentCalculatorComponent;
  let fixture: ComponentFixture<PrePaymentCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrePaymentCalculatorComponent]
    });
    fixture = TestBed.createComponent(PrePaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
