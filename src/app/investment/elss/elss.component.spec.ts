import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELSSComponent } from './elss.component';

describe('ELSSComponent', () => {
  let component: ELSSComponent;
  let fixture: ComponentFixture<ELSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELSSComponent]
    });
    fixture = TestBed.createComponent(ELSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
