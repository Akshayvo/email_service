import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptHackComponent } from './scripthack.component';

describe('ScripthackComponent', () => {
  let component: ScriptHackComponent;
  let fixture: ComponentFixture<ScriptHackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptHackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
