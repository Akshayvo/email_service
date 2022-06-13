import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSizesComponent } from './unit-sizes.component';

describe('UnitSizesComponent', () => {
  let component: UnitSizesComponent;
  let fixture: ComponentFixture<UnitSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
