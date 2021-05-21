import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEstimateComponent } from './free-estimate.component';

describe('FreeEstimateComponent', () => {
  let component: FreeEstimateComponent;
  let fixture: ComponentFixture<FreeEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
