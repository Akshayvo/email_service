import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesIframePageComponent } from './view-rates-iframe-page.component';

describe('ViewRatesIframePageComponent', () => {
  let component: ViewRatesIframePageComponent;
  let fixture: ComponentFixture<ViewRatesIframePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesIframePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesIframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
