import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentRockyCreekComponent } from './pay-rent-rocky-creek.component';

describe('PayRentRockyCreekComponent', () => {
  let component: PayRentRockyCreekComponent;
  let fixture: ComponentFixture<PayRentRockyCreekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentRockyCreekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentRockyCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
