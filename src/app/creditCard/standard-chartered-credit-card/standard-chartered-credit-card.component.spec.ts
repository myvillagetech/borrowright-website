import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCharteredCreditCardComponent } from './standard-chartered-credit-card.component';

describe('StandardCharteredCreditCardComponent', () => {
  let component: StandardCharteredCreditCardComponent;
  let fixture: ComponentFixture<StandardCharteredCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCharteredCreditCardComponent]
    });
    fixture = TestBed.createComponent(StandardCharteredCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
