import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalPensionSchemeComponent } from './national-pension-scheme.component';

describe('NationalPensionSchemeComponent', () => {
  let component: NationalPensionSchemeComponent;
  let fixture: ComponentFixture<NationalPensionSchemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalPensionSchemeComponent]
    });
    fixture = TestBed.createComponent(NationalPensionSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
