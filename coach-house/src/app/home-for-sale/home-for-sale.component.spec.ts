import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForSaleComponent } from './home-for-sale.component';

describe('HomeForSaleComponent', () => {
  let component: HomeForSaleComponent;
  let fixture: ComponentFixture<HomeForSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
