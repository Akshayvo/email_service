import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateDetailsComponent } from './alternate-details.component';

describe('AlternateDetailsComponent', () => {
  let component: AlternateDetailsComponent;
  let fixture: ComponentFixture<AlternateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
