import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesProvidentFundComponent } from './employees-provident-fund.component';

describe('EmployeesProvidentFundComponent', () => {
  let component: EmployeesProvidentFundComponent;
  let fixture: ComponentFixture<EmployeesProvidentFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesProvidentFundComponent]
    });
    fixture = TestBed.createComponent(EmployeesProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
