import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentMiddletownComponent } from './pay-rent-middletown.component';

describe('PayRentNatronaComponent', () => {
  let component: PayRentMiddletownComponent;
  let fixture: ComponentFixture<PayRentMiddletownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentMiddletownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentMiddletownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});