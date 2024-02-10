import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIPCalculatorComponent } from './sipcalculator.component';

describe('SIPCalculatorComponent', () => {
  let component: SIPCalculatorComponent;
  let fixture: ComponentFixture<SIPCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SIPCalculatorComponent]
    });
    fixture = TestBed.createComponent(SIPCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
