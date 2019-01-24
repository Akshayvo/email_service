import { Component, OnInit } from '@angular/core';
import { gallerylocation2, gallerylocation1, galleryDataLocation1, galleryDataLocation2 } from '../data/galleryImage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
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
    if (this.router.url.includes('/location/location1')) {
        this.fetchGalleryLocation1();
    } else {
      this.fetchGalleryLocation2();
    }
 }

  public fetchGalleryLocation1() {
    this.galleryImages = gallerylocation1;
    this.galleryData = galleryDataLocation2;
    this.name = 'Location1';
  }

  public fetchGalleryLocation2() {
    this.galleryImages = gallerylocation2;
    this.galleryData = galleryDataLocation1;
    this.name = 'Location2';
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
