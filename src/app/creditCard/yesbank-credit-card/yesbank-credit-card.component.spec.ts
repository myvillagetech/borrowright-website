import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YESBankCreditCardComponent } from './yesbank-credit-card.component';

describe('YESBankCreditCardComponent', () => {
  let component: YESBankCreditCardComponent;
  let fixture: ComponentFixture<YESBankCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YESBankCreditCardComponent]
    });
    fixture = TestBed.createComponent(YESBankCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
