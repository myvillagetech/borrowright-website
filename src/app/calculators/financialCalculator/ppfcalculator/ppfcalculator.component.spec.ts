import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPFCalculatorComponent } from './ppfcalculator.component';

describe('PPFCalculatorComponent', () => {
  let component: PPFCalculatorComponent;
  let fixture: ComponentFixture<PPFCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PPFCalculatorComponent]
    });
    fixture = TestBed.createComponent(PPFCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
