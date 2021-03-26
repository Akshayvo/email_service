import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUnitPhotosComponent } from './vehicle-unit-photos.component';

describe('VehicleUnitPhotosComponent', () => {
  let component: VehicleUnitPhotosComponent;
  let fixture: ComponentFixture<VehicleUnitPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleUnitPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUnitPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
