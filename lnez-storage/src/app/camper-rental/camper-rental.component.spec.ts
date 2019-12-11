import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperRentalComponent } from './camper-rental.component';

describe('CamperRentalComponent', () => {
  let component: CamperRentalComponent;
  let fixture: ComponentFixture<CamperRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
