import { Component, OnInit } from '@angular/core';
import { aboutusGallery } from '../data/galleryImage';
import { from } from 'rxjs';

@Component({
  selector: 'app-aboutus-photos',
  templateUrl: './aboutus-photos.component.html',
  styleUrls: ['./aboutus-photos.component.scss']
})
export class AboutusPhotosComponent implements OnInit {
  name: string;
  selectedImage: any;
  galleryImages: any;

  constructor() { }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0])
  }
 public fetchGallery(){
   this.galleryImages = aboutusGallery;
 }
 setSelectedImage(image: any) {
  this.selectedImage = image;
}
}
