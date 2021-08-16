import { Component, OnInit } from '@angular/core';
import { galleryAllendale } from '../data/galleryImage';
import { Router } from '@angular/router';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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
    if (this.router.url.includes('allendale')) {
      this.fetchDetailsLocation1();
    }
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryAllendale;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }


  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
