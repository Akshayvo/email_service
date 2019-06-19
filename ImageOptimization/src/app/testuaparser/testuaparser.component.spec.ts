import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestuaparserComponent } from './testuaparser.component';

describe('TestuaparserComponent', () => {
  let component: TestuaparserComponent;
  let fixture: ComponentFixture<TestuaparserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestuaparserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestuaparserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
