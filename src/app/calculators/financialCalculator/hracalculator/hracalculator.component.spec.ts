import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRACalculatorComponent } from './hracalculator.component';

describe('HRACalculatorComponent', () => {
  let component: HRACalculatorComponent;
  let fixture: ComponentFixture<HRACalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRACalculatorComponent]
    });
    fixture = TestBed.createComponent(HRACalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
