import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSizerIframePageComponent } from './unit-sizer-iframe-page.component';

describe('UnitSizerIframePageComponent', () => {
  let component: UnitSizerIframePageComponent;
  let fixture: ComponentFixture<UnitSizerIframePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSizerIframePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSizerIframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
