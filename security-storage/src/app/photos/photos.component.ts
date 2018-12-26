import { Component, OnInit } from '@angular/core';
import { gallery } from '../data/galleryImage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  selectedImage: any;
  galleryImages: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchGallery() {
    this.galleryImages = gallery;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
