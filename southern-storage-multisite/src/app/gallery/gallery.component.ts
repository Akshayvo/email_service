import { Component, OnInit } from "@angular/core";
import {
  galleryLocation1 ,galleryLocation2,galleryDataRockyCreek,galleryDataAgricola
} from "../data/galleryImage";
import { Router } from "@angular/router";
import { UaParserService } from "../services/ua-parser.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  name: string;
  id: number;
  currentActiveTab: any = "Photos";
  selectedImage: any;
  galleryImages: any;
  galleryData: any;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private router: Router,
    private uaParserService: UaParserService
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.isSomePage(); 
    this.setSelectedImage(this.galleryImages[0]); 
  }

  public isSomePage() {
    if (this.router.url.includes("rocky-creek")) {
      this.fetchDetailsLocation1();
    }
    if (this.router.url.includes("agricola")) {
      this.fetchDetailsLocation2();
    }
    
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryLocation1;
    this.galleryData = galleryDataRockyCreek;
    this.id = 1;
  }
  public fetchDetailsLocation2() {
    this.galleryImages = galleryLocation2;
    this.galleryData = galleryDataAgricola;
    this.id = 2;
  }

  
  setSelectedImage(image: any) {
    this.selectedImage = image;
  }
}
