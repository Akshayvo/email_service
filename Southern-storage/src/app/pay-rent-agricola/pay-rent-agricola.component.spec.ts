import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentAgricolaComponent } from './pay-rent-agricola.component';

describe('PayRentAgricolaComponent', () => {
  let component: PayRentAgricolaComponent;
  let fixture: ComponentFixture<PayRentAgricolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentAgricolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentAgricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
