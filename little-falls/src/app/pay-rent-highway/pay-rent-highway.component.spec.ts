import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentHighwayComponent } from './pay-rent-highway.component';

describe('PayRentHighwayComponent', () => {
  let component: PayRentHighwayComponent;
  let fixture: ComponentFixture<PayRentHighwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentHighwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentHighwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
