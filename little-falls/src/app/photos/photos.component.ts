import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { galleryImages, galleryImagesTab} from '../data/galleryImage';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  selectedImage: any;
  galleryImages: any;
  Images: any;
  galleryImagesTab: any;



  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.isSomePage();
    this.setSelectedImage(this.Images[0]);
  }

  public isSomePage() {
  if (this.router.url.includes('/location/little-falls-mini-storage/about')) {
    this.fetchGalleryTab();
  } else {
    this.fetchGallery();
  }
}

  public fetchGallery() {
    this.Images = galleryImages;
  }

  public fetchGalleryTab() {
    this.Images = galleryImagesTab;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
