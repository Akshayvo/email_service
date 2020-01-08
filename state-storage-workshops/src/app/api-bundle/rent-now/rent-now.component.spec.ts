import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentNowComponent } from './rent-now.component';

describe('RentNowComponent', () => {
  let component: RentNowComponent;
  let fixture: ComponentFixture<RentNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
