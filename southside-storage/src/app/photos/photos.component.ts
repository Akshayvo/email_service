import { Component, OnInit } from '@angular/core';
import {  galleryImagesLocation1,} from '../data/galleryImage';
import { Router } from '@angular/router';
import { UaParserService } from '../../app/services/ua-parser.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  id: number;
  imageBaseUrl: any;
  imagetype: any;
  selectedImage: any;
  galleryImages: any;
  galleryData: any;

  constructor(private router: Router,
    private uaParserService: UaParserService,
    ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
   }

  ngOnInit() {
    this.fetchDetailsLocation1();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryImagesLocation1;
    this.id = 1;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

 public getImageUrl(imageName: String) {
  // const extension = this.imagetype.toLowerCase();
  return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
}

}
