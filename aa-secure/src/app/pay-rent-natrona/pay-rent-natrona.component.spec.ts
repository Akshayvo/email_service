import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentNatronaComponent } from './pay-rent-natrona.component';

describe('PayRentNatronaComponent', () => {
  let component: PayRentNatronaComponent;
  let fixture: ComponentFixture<PayRentNatronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentNatronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentNatronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
