import { Component, OnInit } from '@angular/core';
import { aboutusGallery  } from '../data/galleryImage';
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
    this.isSomePage();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public isSomePage() {
    this.fetchDetailsLocation();
  }

  public fetchDetailsLocation() {
    this.galleryImages = aboutusGallery;
  }


  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
