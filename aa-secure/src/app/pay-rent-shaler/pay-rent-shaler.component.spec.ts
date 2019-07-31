import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentShalerComponent } from './pay-rent-shaler.component';

describe('PayRentShalerComponent', () => {
  let component: PayRentShalerComponent;
  let fixture: ComponentFixture<PayRentShalerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentShalerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentShalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
