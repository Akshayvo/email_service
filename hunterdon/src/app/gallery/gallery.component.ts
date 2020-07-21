import { Component, OnInit } from '@angular/core';
import { galleryRingoes, galleryLocation1, galleryLocation2 } from '../data/galleryImage';
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
    if (this.router.url.includes('hunterdon-storage-ringoes')) {
      this.fetchDetailsLocation1();
    } else if (this.router.url.includes('hunterdon-storage-1')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('hunterdon-storage-2')) {
      this.fetchDetailsLocation3();
    }
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryRingoes;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation2() {
    this.galleryImages = galleryLocation1;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation3() {
    this.galleryImages = galleryLocation2;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }


  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
