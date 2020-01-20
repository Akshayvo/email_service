import { Component, OnInit } from '@angular/core';
import { aboutusGallery } from '../data/galleryImage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus-photos',
  templateUrl: './aboutus-photos.component.html',
  styleUrls: ['./aboutus-photos.component.scss']
})
export class AboutusPhotosComponent implements OnInit {
  name: string;
  id: number;
  currentActiveTab: any = 'Photos';
  selectedImage: any;
  galleryImages: any;
  galleryData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchAboutUsGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }
  public fetchAboutUsGallery() {
    this.galleryImages = aboutusGallery;
  }
  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
