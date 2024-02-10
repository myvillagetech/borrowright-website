import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaSamriddhiYojanaCalculatorComponent } from './sukanya-samriddhi-yojana-calculator.component';

describe('SukanyaSamriddhiYojanaCalculatorComponent', () => {
  let component: SukanyaSamriddhiYojanaCalculatorComponent;
  let fixture: ComponentFixture<SukanyaSamriddhiYojanaCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukanyaSamriddhiYojanaCalculatorComponent]
    });
    fixture = TestBed.createComponent(SukanyaSamriddhiYojanaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
