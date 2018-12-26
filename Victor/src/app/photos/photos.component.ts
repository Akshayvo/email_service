import { Component, OnInit } from '@angular/core';
import { galleryMall, galleryvillage, galleryDataMall, galleryDataVillage } from '../data/galleryImage';
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
  private sub: any;


  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
    // this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public isSomePage() {
    if (this.router.url.includes('/location/village')) {
        this.fetchGalleryVillage();
    } else {
      this.fetchGalleryMall();
    }
 }

  public fetchGalleryVillage() {
    this.galleryImages = galleryvillage;
    this.galleryData = galleryDataVillage;
    this.name = 'Village';
  }

  public fetchGalleryMall() {
    this.galleryImages = galleryMall;
    this.galleryData = galleryDataMall;
    this.name = 'Mall';
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
