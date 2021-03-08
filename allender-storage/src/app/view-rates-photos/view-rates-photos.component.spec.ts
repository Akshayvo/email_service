import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesPhotosComponent } from './view-rates-photos.component';

describe('ViewRatesPhotosComponent', () => {
  let component: ViewRatesPhotosComponent;
  let fixture: ComponentFixture<ViewRatesPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
