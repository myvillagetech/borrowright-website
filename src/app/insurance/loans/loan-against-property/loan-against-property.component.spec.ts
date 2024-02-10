import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAgainstPropertyComponent } from './loan-against-property.component';

describe('LoanAgainstPropertyComponent', () => {
  let component: LoanAgainstPropertyComponent;
  let fixture: ComponentFixture<LoanAgainstPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanAgainstPropertyComponent]
    });
    fixture = TestBed.createComponent(LoanAgainstPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
