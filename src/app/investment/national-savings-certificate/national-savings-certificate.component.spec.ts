import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSavingsCertificateComponent } from './national-savings-certificate.component';

describe('NationalSavingsCertificateComponent', () => {
  let component: NationalSavingsCertificateComponent;
  let fixture: ComponentFixture<NationalSavingsCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalSavingsCertificateComponent]
    });
    fixture = TestBed.createComponent(NationalSavingsCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
