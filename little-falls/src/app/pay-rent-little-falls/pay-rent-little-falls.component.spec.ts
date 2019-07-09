import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentLittleFallsComponent } from './pay-rent-little-falls.component';

describe('PayRentLittleFallsComponent', () => {
  let component: PayRentLittleFallsComponent;
  let fixture: ComponentFixture<PayRentLittleFallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentLittleFallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentLittleFallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
