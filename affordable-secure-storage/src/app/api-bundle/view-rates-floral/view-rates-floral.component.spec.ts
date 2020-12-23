import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesFloralComponent } from './view-rates-floral.component';

describe('ViewRatesFloralComponent', () => {
  let component: ViewRatesFloralComponent;
  let fixture: ComponentFixture<ViewRatesFloralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesFloralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesFloralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
