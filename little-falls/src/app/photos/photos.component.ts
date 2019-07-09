import { Component, OnInit } from '@angular/core';
// import { galleryDataLocation1, galleryDataLocation2, galleryDataLocation3,
//         galleryImagesLocation1, galleryImagesLocation2, galleryImagesLocation3 } from '../data/galleryImage';
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
    if (this.router.url.includes('/location/little-falls-mini-storage')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/highway-27-mini-storage')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/lincoln-street-storage'))  {
    this.fetchDetailsLocation3();
  }
  }

  public fetchDetailsLocation1() {
    // this.galleryImages = galleryImagesLocation1;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation2() {
    // this.galleryImages = galleryImagesLocation2;
    // this.galleryData = galleryDataLocation2;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    // this.galleryImages = galleryImagesLocation3;
    // this.galleryData = galleryDataLocation3;
    this.id = 3;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
