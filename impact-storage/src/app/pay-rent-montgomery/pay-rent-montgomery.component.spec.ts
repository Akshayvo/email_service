import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentMontgomeryComponent } from './pay-rent-montgomery.component';

describe('PayRentNatronaComponent', () => {
  let component: PayRentMontgomeryComponent;
  let fixture: ComponentFixture<PayRentMontgomeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentMontgomeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentMontgomeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});