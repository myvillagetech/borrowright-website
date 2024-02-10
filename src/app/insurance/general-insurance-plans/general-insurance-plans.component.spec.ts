import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInsurancePlansComponent } from './general-insurance-plans.component';

describe('GeneralInsurancePlansComponent', () => {
  let component: GeneralInsurancePlansComponent;
  let fixture: ComponentFixture<GeneralInsurancePlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInsurancePlansComponent]
    });
    fixture = TestBed.createComponent(GeneralInsurancePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
