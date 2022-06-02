import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentChesterComponent } from './pay-rent-chester.component';

describe('PayRentNatronaComponent', () => {
  let component: PayRentChesterComponent;
  let fixture: ComponentFixture<PayRentChesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentChesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentChesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});