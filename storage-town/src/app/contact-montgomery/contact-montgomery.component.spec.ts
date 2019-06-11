import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMontgomeryComponent } from './contact-montgomery.component';

describe('ContactMontgomeryComponent', () => {
  let component: ContactMontgomeryComponent;
  let fixture: ComponentFixture<ContactMontgomeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMontgomeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMontgomeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
