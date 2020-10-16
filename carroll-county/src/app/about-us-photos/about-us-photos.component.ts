import { Component, OnInit } from '@angular/core';
import { aboutusGallery, aboutusGalleryLocaion1, aboutusGalleryLocaion2, aboutusGalleryLocaion3 } from '../data/galleryImage';
import { UaParserService } from '../services/ua-parser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-photos',
  templateUrl: './about-us-photos.component.html',
  styleUrls: ['./about-us-photos.component.scss']
})
export class AboutUsPhotosComponent implements OnInit {
  name: string;
  selectedImage: any;
  galleryImages: any;
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    private uaParserService: UaParserService,
    private router: Router
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

 public fetchGallery() {
  if (this.router.url.includes('/location/mcKenzie')) {
    this.galleryImages = aboutusGalleryLocaion1;
} else if (this.router.url.includes('/location/huntingdon')) {
  this.galleryImages = aboutusGalleryLocaion2;
} else if (this.router.url.includes('/location/airport')) {
  this.galleryImages = aboutusGalleryLocaion3;
} else {
  this.galleryImages = aboutusGallery;
}
 }

 setSelectedImage(image: any) {
  this.selectedImage = image;
  }
}
