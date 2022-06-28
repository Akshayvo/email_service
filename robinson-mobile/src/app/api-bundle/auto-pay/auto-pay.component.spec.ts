import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPayComponent } from './auto-pay.component';

describe('AutoPayComponent', () => {
  let component: AutoPayComponent;
  let fixture: ComponentFixture<AutoPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
