import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveUnitIframePageComponent } from './reserve-unit-iframe-page.component';

describe('ReserveUnitIframePageComponent', () => {
  let component: ReserveUnitIframePageComponent;
  let fixture: ComponentFixture<ReserveUnitIframePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveUnitIframePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveUnitIframePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
