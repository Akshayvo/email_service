import { Component, OnInit } from '@angular/core';
import { galleryDataLocation1, galleryDataLocation2,
        galleryImagesLocation1, galleryImagesLocation2,  galleryImagesHome } from '../data/galleryImage';
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
    if (this.router.url.includes('/location/730-kenton-station')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/751-kenton-station')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/113-mcDonald-parkway'))  {
    this.fetchDetailsLocation4();
  } else {
    this.fetchDetailsHome();
  }
}

  public fetchDetailsLocation1() {
    this.galleryImages = galleryImagesLocation1;
    this.galleryData = galleryDataLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation2() {
    this.galleryImages = galleryImagesLocation2;
    this.galleryData = galleryDataLocation2;
    this.id = 2;
  }



  public fetchDetailsLocation4() {
    // this.galleryImages = galleryImagesLocation3;
    // this.galleryData = galleryDataLocation3;
    this.id = 4;
  }

  public fetchDetailsHome() {
    this.galleryImages = galleryImagesHome;
    this.id = 5;
  }


  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

}
