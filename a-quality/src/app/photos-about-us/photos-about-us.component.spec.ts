import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAboutUsComponent } from './photos-about-us.component';

describe('PhotosAboutUsComponent', () => {
  let component: PhotosAboutUsComponent;
  let fixture: ComponentFixture<PhotosAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
