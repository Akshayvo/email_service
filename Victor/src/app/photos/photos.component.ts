import { Component, OnInit } from '@angular/core';
import { galleryDataLocation1, galleryDataLocation2, galleryLocation1, galleryLocation2 } from '../data/galleryImage';
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
    if (this.router.url.includes('/location/mall')) {
        this.fetchGalleryLocation1();
    } else if (this.router.url.includes('/location/village')) {
      this.fetchGalleryLocation2();
    }
 }

  public fetchGalleryLocation1() {
    this.galleryImages = galleryLocation1;
    this.galleryData = galleryDataLocation1;
    this.name = 'Victor Self Storage - Mall';
    this.id = 0;
  }

  public fetchGalleryLocation2() {
    this.galleryImages = galleryLocation2;
    this.galleryData = galleryDataLocation2;
    this.name = 'Victor Self Storage - Village';
    this.id = 1;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
