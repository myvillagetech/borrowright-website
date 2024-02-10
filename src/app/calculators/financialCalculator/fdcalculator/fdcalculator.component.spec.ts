import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDCalculatorComponent } from './fdcalculator.component';

describe('FDCalculatorComponent', () => {
  let component: FDCalculatorComponent;
  let fixture: ComponentFixture<FDCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FDCalculatorComponent]
    });
    fixture = TestBed.createComponent(FDCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
