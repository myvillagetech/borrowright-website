import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransferCalculatorComponent } from './balance-transfer-calculator.component';

describe('BalanceTransferCalculatorComponent', () => {
  let component: BalanceTransferCalculatorComponent;
  let fixture: ComponentFixture<BalanceTransferCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceTransferCalculatorComponent]
    });
    fixture = TestBed.createComponent(BalanceTransferCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
