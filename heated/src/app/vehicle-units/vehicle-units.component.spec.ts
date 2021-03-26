import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUnitsComponent } from './vehicle-units.component';

describe('VehicleUnitsComponent', () => {
  let component: VehicleUnitsComponent;
  let fixture: ComponentFixture<VehicleUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
