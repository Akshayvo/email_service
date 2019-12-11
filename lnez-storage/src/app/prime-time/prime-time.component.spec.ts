import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTimeComponent } from './prime-time.component';

describe('PrimeTimeComponent', () => {
  let component: PrimeTimeComponent;
  let fixture: ComponentFixture<PrimeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
