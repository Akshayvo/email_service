import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesPageComponent } from './view-rates-page.component';

describe('ViewRatesPageComponent', () => {
  let component: ViewRatesPageComponent;
  let fixture: ComponentFixture<ViewRatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
