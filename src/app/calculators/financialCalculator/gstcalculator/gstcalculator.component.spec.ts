import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTCalculatorComponent } from './gstcalculator.component';

describe('GSTCalculatorComponent', () => {
  let component: GSTCalculatorComponent;
  let fixture: ComponentFixture<GSTCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GSTCalculatorComponent]
    });
    fixture = TestBed.createComponent(GSTCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
