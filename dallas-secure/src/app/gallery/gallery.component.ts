import { Component, OnInit } from "@angular/core";
import {
  galleryImagesLocation1,galleryImagesLocation2
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
    if (this.router.url.includes("dallas-secure-storage")) {
      this.fetchDetailsLocation1();
    }
    if (this.router.url.includes("location-2")) {
      this.fetchDetailsLocation2();
    }
    // if (this.router.url.includes("dutton")) {
    //   this.fetchDetailsLocation3();
    // }
    // if (this.router.url.includes("howard-city")) {
    //   this.fetchDetailsLocation4();
    // }
    // if (this.router.url.includes("m45")) {
    //   this.fetchDetailsLocation5();
    // }
    // if (this.router.url.includes("otsego")) {
    //   this.fetchDetailsLocation6();
    // }
    // if (this.router.url.includes("wayland-mill")) {
    //   this.fetchDetailsLocation7();
    // }
    // if (this.router.url.includes("wayland-southside")) {
    //   this.fetchDetailsLocation8();
    // }
    // if (this.router.url.includes("wayland-westside")) {
    //   this.fetchDetailsLocation9();
    // }
    // if (this.router.url.includes("red-barn")) {
    //   this.fetchDetailsLocation10();
    // }
    // if (this.router.url.includes("ionia")) {
    //   this.fetchDetailsLocation11();
    // }
  }

  public fetchDetailsLocation1() {
    this.galleryImages = galleryImagesLocation1;
    // this.galleryData = galleryDataLocation1;
    this.id = 1;
  }
  public fetchDetailsLocation2() {
    this.galleryImages = galleryImagesLocation2;
    // this.galleryData = galleryDataLocation1;
    this.id = 2;
  }

  // public fetchDetailsLocation3() {
  //   this.galleryImages = galleryDutton;
  //   this.id = 3;
  // }
  // public fetchDetailsLocation4() {
  //   this.galleryImages = galleryHoward;
  //   this.id = 4;
  // }
  // public fetchDetailsLocation5() {
  //   this.galleryImages = galleryM45;
  //   this.id = 5;
  // }
  // public fetchDetailsLocation6() {
  //   this.galleryImages = galleryOtsego;
  //   this.id = 6;
  // }

  // public fetchDetailsLocation7() {
  //   this.galleryImages = galleryWaylandMillStreet;
  //   this.id = 7;
  // }

  // public fetchDetailsLocation8() {
  //   this.galleryImages = galleryWaylandSouthSide;
  //   this.id = 8;
  // }
  // public fetchDetailsLocation9() {
  //   this.galleryImages = galleryWaylandWestSide;
  //   this.id = 9;
  // }
  // public fetchDetailsLocation10() {
  //   this.galleryImages = galleryRedBarn;
  //   this.id = 10;
  // }
  // public fetchDetailsLocation11() {
  //   this.galleryImages = galleryIonia;
  //   this.id = 11;
  // }
  setSelectedImage(image: any) {
    this.selectedImage = image;
  }
}
