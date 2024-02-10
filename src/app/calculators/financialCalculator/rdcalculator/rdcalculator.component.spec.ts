import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDCalculatorComponent } from './rdcalculator.component';

describe('RDCalculatorComponent', () => {
  let component: RDCalculatorComponent;
  let fixture: ComponentFixture<RDCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RDCalculatorComponent]
    });
    fixture = TestBed.createComponent(RDCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
