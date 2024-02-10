import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorCitizenSavingSchemeComponent } from './senior-citizen-saving-scheme.component';

describe('SeniorCitizenSavingSchemeComponent', () => {
  let component: SeniorCitizenSavingSchemeComponent;
  let fixture: ComponentFixture<SeniorCitizenSavingSchemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeniorCitizenSavingSchemeComponent]
    });
    fixture = TestBed.createComponent(SeniorCitizenSavingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
