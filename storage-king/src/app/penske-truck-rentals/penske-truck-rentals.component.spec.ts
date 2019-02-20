import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenskeTruckRentalsComponent } from './penske-truck-rentals.component';

describe('PenskeTruckRentalsComponent', () => {
  let component: PenskeTruckRentalsComponent;
  let fixture: ComponentFixture<PenskeTruckRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenskeTruckRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenskeTruckRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
