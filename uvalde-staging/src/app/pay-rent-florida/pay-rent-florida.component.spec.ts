import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentFloridaComponent } from './pay-rent-florida.component';

describe('PayRentFloridaComponent', () => {
  let component: PayRentFloridaComponent;
  let fixture: ComponentFixture<PayRentFloridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentFloridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentFloridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
