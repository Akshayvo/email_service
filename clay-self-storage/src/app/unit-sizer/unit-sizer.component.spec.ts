import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSizerComponent } from './unit-sizer.component';

describe('UnitSizerComponent', () => {
  let component: UnitSizerComponent;
  let fixture: ComponentFixture<UnitSizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
