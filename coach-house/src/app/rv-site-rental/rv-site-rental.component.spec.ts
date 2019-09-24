import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvSiteRentalComponent } from './rv-site-rental.component';

describe('RvSiteRentalComponent', () => {
  let component: RvSiteRentalComponent;
  let fixture: ComponentFixture<RvSiteRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvSiteRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvSiteRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
