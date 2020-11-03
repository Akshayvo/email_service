import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatAndRvComponent } from './boat-and-rv.component';

describe('BoatAndRvComponent', () => {
  let component: BoatAndRvComponent;
  let fixture: ComponentFixture<BoatAndRvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatAndRvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatAndRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
