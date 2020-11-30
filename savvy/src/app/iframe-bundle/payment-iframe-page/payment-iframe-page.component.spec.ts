import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIframePageComponent } from './payment-iframe-page.component';

describe('PaymentIframePageComponent', () => {
  let component: PaymentIframePageComponent;
  let fixture: ComponentFixture<PaymentIframePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentIframePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
