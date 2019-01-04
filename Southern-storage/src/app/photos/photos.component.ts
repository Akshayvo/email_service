import { Component, OnInit } from '@angular/core';
import { galleryMall, galleryRockyCreek, galleryDataAgricola, galleryDataRockyCreek } from '../data/galleryImage';
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
    if (this.router.url.includes('/location/rocky-creek')) {
        this.fetchGalleryRockyCreek();
    } else if (this.router.url.includes('/location/agricola')) {
      this.fetchGalleryAgicola();
    }
 }

  public fetchGalleryRockyCreek() {
    this.galleryImages = galleryRockyCreek;
    this.galleryData = galleryDataRockyCreek;
    this.name = 'Rocky Creek';
    this.id = 0;
  }

  public fetchGalleryAgicola() {
    this.galleryImages = galleryMall;
    this.galleryData = galleryDataAgricola;
    this.name = 'Agicola';
    this.id = 1;
  }

  // public fetchGalleryBarton() {
  //   this.galleryImages = galleryMall;
  //   this.galleryData = galleryDataMall;
  //   this.name = 'Barton';
  // }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
