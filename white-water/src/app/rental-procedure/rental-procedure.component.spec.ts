import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalProcedureComponent } from './rental-procedure.component';

describe('RentalProcedureComponent', () => {
  let component: RentalProcedureComponent;
  let fixture: ComponentFixture<RentalProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
