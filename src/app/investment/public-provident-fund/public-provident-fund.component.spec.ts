import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProvidentFundComponent } from './public-provident-fund.component';

describe('PublicProvidentFundComponent', () => {
  let component: PublicProvidentFundComponent;
  let fixture: ComponentFixture<PublicProvidentFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicProvidentFundComponent]
    });
    fixture = TestBed.createComponent(PublicProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
