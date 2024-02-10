import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystematicInvestmentPlanComponent } from './systematic-investment-plan.component';

describe('SystematicInvestmentPlanComponent', () => {
  let component: SystematicInvestmentPlanComponent;
  let fixture: ComponentFixture<SystematicInvestmentPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystematicInvestmentPlanComponent]
    });
    fixture = TestBed.createComponent(SystematicInvestmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
