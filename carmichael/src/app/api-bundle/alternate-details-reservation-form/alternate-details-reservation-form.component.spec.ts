import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateDetailsReservationFormComponent } from './alternate-details-reservation-form.component';

describe('AlternateDetailsReservationFormComponent', () => {
  let component: AlternateDetailsReservationFormComponent;
  let fixture: ComponentFixture<AlternateDetailsReservationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateDetailsReservationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateDetailsReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
