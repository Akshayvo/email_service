import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWithModalComponent } from './spinner-with-modal.component';

describe('SpinnerWithModalComponent', () => {
  let component: SpinnerWithModalComponent;
  let fixture: ComponentFixture<SpinnerWithModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerWithModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerWithModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
