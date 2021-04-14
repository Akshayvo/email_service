import { Component, OnInit } from '@angular/core';
import { galleryHome } from '../data/vehicleUnitgalleryImage';
import { ActivatedRoute, Router } from '@angular/router';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-vehicle-unit-photos',
  templateUrl: './vehicle-unit-photos.component.html',
  styleUrls: ['./vehicle-unit-photos.component.scss']
})
export class VehicleUnitPhotosComponent implements OnInit {
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