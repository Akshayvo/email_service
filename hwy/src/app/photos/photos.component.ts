import { Component, OnInit } from '@angular/core';
import { galleryImages } from '../data/galleryImage';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  selectedImage: any;
  galleryImages: any;
  galleryData: any;


  constructor() { }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchGallery() {
      this.galleryImages = galleryImages;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
