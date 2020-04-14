import { Component, OnInit } from '@angular/core';
import {  galleryImagesLocation1,} from '../data/galleryImage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  id: number;
  currentActiveTab: any = 'Photos';
  selectedImage: any;
  galleryImages: any;
  galleryData: any;

  constructor(private router: Router) { }

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

}