import { Component, OnInit } from '@angular/core';
import { galleryHome,galleryAmenities, galleryRvSiteRental, galleryLocation } from '../data/galleryImage';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  name: string;
  selectedImage: any;
  galleryImages: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  // public fetchGallery() {
  //   this.galleryImages = gallery;
  // }
  public fetchGallery() {
    if (this.router.url.includes('/amenities')) {
      this.fetchAmenitiesGallery();
    }  else {
      if (this.router.url.includes('/rv-site-rental')) {
        this.fetchRvSiteRentalGallery();
      } else {
        if (this.router.url.includes('/location'))  {
          this.fetchLocationGallery();
        } else {
            this.fetchHomeGallery();
      } 
    } 
  } 


  
  }

  public fetchHomeGallery() {
    this.galleryImages = galleryHome;
  }
  public fetchAmenitiesGallery() {
    this.galleryImages = galleryAmenities;
  
  }
  public fetchRvSiteRentalGallery(){
    this.galleryImages = galleryRvSiteRental;
  }
  public fetchLocationGallery(){
    this.galleryImages = galleryLocation;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }
}
