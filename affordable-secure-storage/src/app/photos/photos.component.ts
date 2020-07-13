import { Component, OnInit } from '@angular/core';
import { galleryDataLocation1, galleryDataLocation3,
        galleryImagesLocation1, galleryImagesLocation3, aboutusGallery } from '../data/galleryImage';
import { Router } from '@angular/router';
import { UaParserService } from '../services/ua-parser.service';

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
  imagetype: any;
  imageBaseUrl: any;

  constructor(private router: Router,
    private uaParserService: UaParserService,
    ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
   }

  ngOnInit() {
    this.isSomePage();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public isSomePage() {
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
      this.fetchDetailsLocation1();
    }
  }

  public fetchDetailsLocation1() {
    // this.galleryImages = galleryImagesLocation1;
    // this.galleryData = galleryDataLocation1;
    this.galleryImages = aboutusGallery;
    this.id = 1;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
