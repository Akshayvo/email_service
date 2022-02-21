import { Component, OnInit } from "@angular/core";
import {
  galleryGreentown,
  galleryLakeAriel,
  galleryHawley,
  galleryLakeVille,
 
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
    if (this.router.url.includes("greentown")) {
      this.fetchDetailsLocation1();
    }
    if (this.router.url.includes("lake-ariel")) {
      this.fetchDetailsLocation2();
    }
    if (this.router.url.includes("hawley")) {
      this.fetchDetailsLocation3();
    }
    if (this.router.url.includes("lakeville")) {
      this.fetchDetailsLocation4();
    }
    if (this.router.url.includes("greentown1")) {
      this.fetchDetailsLocation5();
    }
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryGreentown;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }
  public fetchDetailsLocation2() {
    this.galleryImages = galleryLakeAriel;
    // this.galleryData = galleryDataLocation1;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    this.galleryImages = galleryHawley;
    this.id = 3;
  }
  public fetchDetailsLocation4() {
    this.galleryImages = galleryLakeVille;
    this.id = 4;
  }
  public fetchDetailsLocation5() {
    this.galleryImages = galleryGreentown;
    this.id = 5;
  }
  setSelectedImage(image: any) {
    this.selectedImage = image;
  }
}
