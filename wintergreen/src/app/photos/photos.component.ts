import { Component, OnInit } from '@angular/core';
import { galleryHome } from '../data/galleryImage';
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
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchGallery() {
    this.galleryImages = galleryHome;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
