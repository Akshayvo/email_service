import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentBartonComponent } from './pay-rent-barton.component';

describe('PayRentBartonComponent', () => {
  let component: PayRentBartonComponent;
  let fixture: ComponentFixture<PayRentBartonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentBartonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentBartonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
