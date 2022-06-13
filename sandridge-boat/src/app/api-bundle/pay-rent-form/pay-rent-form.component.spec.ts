import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentFormComponent } from './pay-rent-form.component';

describe('PayRentFormComponent', () => {
  let component: PayRentFormComponent;
  let fixture: ComponentFixture<PayRentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
