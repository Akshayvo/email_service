import { Component, OnInit } from '@angular/core';
import { galleryHome, viewRateImages } from '../data/galleryImage';
import { ActivatedRoute, Router } from '@angular/router';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  selectedImage: any;
  galleryImages: any;
  viewRateImages: any;
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    if (this.router.url.includes('/view-rates')) {
      this.fetchViewRateGallery();
    } else {
      this.fetchGallery();
    }
  }

  public fetchGallery() {
    this.galleryImages = galleryHome;
  }

  public fetchViewRateGallery() {
    this.galleryImages = viewRateImages;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
