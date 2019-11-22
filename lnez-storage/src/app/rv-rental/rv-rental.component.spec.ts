import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvRentalComponent } from './rv-rental.component';

describe('RvRentalComponent', () => {
  let component: RvRentalComponent;
  let fixture: ComponentFixture<RvRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
