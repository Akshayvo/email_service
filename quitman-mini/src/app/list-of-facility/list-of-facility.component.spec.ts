import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFacilityComponent } from './list-of-facility.component';

describe('ListOfFacilityComponent', () => {
  let component: ListOfFacilityComponent;
  let fixture: ComponentFixture<ListOfFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
