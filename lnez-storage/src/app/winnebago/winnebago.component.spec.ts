import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnebagoComponent } from './winnebago.component';

describe('WinnebagoComponent', () => {
  let component: WinnebagoComponent;
  let fixture: ComponentFixture<WinnebagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnebagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnebagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
