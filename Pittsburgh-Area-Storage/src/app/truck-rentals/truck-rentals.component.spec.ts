import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRentalsComponent } from './truck-rentals.component';

describe('TruckRentalsComponent', () => {
  let component: TruckRentalsComponent;
  let fixture: ComponentFixture<TruckRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
