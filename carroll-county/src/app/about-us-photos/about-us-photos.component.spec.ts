import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPhotosComponent } from './about-us-photos.component';

describe('AboutUsPhotosComponent', () => {
  let component: AboutUsPhotosComponent;
  let fixture: ComponentFixture<AboutUsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
