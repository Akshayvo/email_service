import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFloridaComponent } from './contact-florida.component';

describe('ContactFloridaComponent', () => {
  let component: ContactFloridaComponent;
  let fixture: ComponentFixture<ContactFloridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFloridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFloridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
