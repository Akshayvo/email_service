import { Component, OnInit } from '@angular/core';
import { galleryImages } from '../data/galleryImage';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-photos-about-us',
  templateUrl: './photos-about-us.component.html',
  styleUrls: ['./photos-about-us.component.scss']
})
export class PhotosAboutUsComponent implements OnInit {

  name: string;
  selectedImage: any;
  galleryImages: any;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private uaParserService: UaParserService,
  ) { 
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0])
  }
 public fetchGallery(){
   this.galleryImages = galleryImages;
 }
 
 setSelectedImage(image: any) {
  this.selectedImage = image;
 }
}