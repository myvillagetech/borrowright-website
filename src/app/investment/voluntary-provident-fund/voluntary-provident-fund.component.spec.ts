import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryProvidentFundComponent } from './voluntary-provident-fund.component';

describe('VoluntaryProvidentFundComponent', () => {
  let component: VoluntaryProvidentFundComponent;
  let fixture: ComponentFixture<VoluntaryProvidentFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntaryProvidentFundComponent]
    });
    fixture = TestBed.createComponent(VoluntaryProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
