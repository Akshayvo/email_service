import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveUnitFormComponent } from './reserve-unit-form.component';

describe('ReserveUnitFormComponent', () => {
  let component: ReserveUnitFormComponent;
  let fixture: ComponentFixture<ReserveUnitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveUnitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
