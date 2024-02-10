import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisBankCreditCardComponent } from './axis-bank-credit-card.component';

describe('AxisBankCreditCardComponent', () => {
  let component: AxisBankCreditCardComponent;
  let fixture: ComponentFixture<AxisBankCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxisBankCreditCardComponent]
    });
    fixture = TestBed.createComponent(AxisBankCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
