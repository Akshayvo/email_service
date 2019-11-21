import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAndRvComponent } from './bot-and-rv.component';

describe('BotAndRvComponent', () => {
  let component: BotAndRvComponent;
  let fixture: ComponentFixture<BotAndRvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAndRvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAndRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
