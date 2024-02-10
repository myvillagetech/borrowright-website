import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDFCBankCreditCardComponent } from './idfcbank-credit-card.component';

describe('IDFCBankCreditCardComponent', () => {
  let component: IDFCBankCreditCardComponent;
  let fixture: ComponentFixture<IDFCBankCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDFCBankCreditCardComponent]
    });
    fixture = TestBed.createComponent(IDFCBankCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
