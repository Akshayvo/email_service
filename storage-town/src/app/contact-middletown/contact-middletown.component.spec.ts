import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMiddletownComponent } from './contact-middletown.component';

describe('ContactMiddletownComponent', () => {
  let component: ContactMiddletownComponent;
  let fixture: ComponentFixture<ContactMiddletownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMiddletownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMiddletownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
