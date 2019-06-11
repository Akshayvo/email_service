import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChesterComponent } from './contact-chester.component';

describe('ContactChesterComponent', () => {
  let component: ContactChesterComponent;
  let fixture: ComponentFixture<ContactChesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactChesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
