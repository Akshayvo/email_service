import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrodataComponent } from './microdata.component';

describe('MicrodataComponent', () => {
  let component: MicrodataComponent;
  let fixture: ComponentFixture<MicrodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
