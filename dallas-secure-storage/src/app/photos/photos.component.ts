import { Component, OnInit } from '@angular/core';
import { galleryDataLocation1, galleryDataLocation3,
        galleryImagesLocation1, galleryImagesLocation3, aboutusGallery } from '../data/galleryImage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  id: number;
  currentActiveTab: any = 'Photos';
  selectedImage: any;
  galleryImages: any;
  galleryData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public isSomePage() {
    if (this.router.url.includes('/location/dallas-secure-storage')) {
      this.fetchDetailsLocation1();
  } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
    this.fetchDetailsLocation3();
  } else {
  this.fetchAboutUsGallery();
}
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryImagesLocation1;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation3() {
    this.galleryImages = galleryImagesLocation3;
    // this.galleryData = galleryDataLocation3;
    this.id = 3;
  }

  public fetchAboutUsGallery() {
  this.galleryImages = aboutusGallery;
}

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
