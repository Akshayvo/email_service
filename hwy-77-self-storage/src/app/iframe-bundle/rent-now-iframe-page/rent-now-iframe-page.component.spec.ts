import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentNowIframePageComponent } from './rent-now-iframe-page.component';

describe('RentNowIframePageComponent', () => {
  let component: RentNowIframePageComponent;
  let fixture: ComponentFixture<RentNowIframePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentNowIframePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentNowIframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
