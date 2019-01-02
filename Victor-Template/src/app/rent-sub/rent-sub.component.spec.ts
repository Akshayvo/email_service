import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSubComponent } from './rent-sub.component';

describe('RentSubComponent', () => {
  let component: RentSubComponent;
  let fixture: ComponentFixture<RentSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
