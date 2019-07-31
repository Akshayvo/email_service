import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveUnitComponent } from './reserve-unit.component';

describe('ReserveUnitComponent', () => {
  let component: ReserveUnitComponent;
  let fixture: ComponentFixture<ReserveUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
