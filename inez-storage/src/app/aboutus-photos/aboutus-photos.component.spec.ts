import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusPhotosComponent } from './aboutus-photos.component';

describe('AboutusPhotosComponent', () => {
  let component: AboutusPhotosComponent;
  let fixture: ComponentFixture<AboutusPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
