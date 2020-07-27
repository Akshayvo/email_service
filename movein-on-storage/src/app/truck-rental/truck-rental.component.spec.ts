import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRentalComponent } from './truck-rental.component';

describe('TruckRentalComponent', () => {
  let component: TruckRentalComponent;
  let fixture: ComponentFixture<TruckRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
