import { Component, OnInit, OnDestroy } from '@angular/core';
import { gallery, galleryDataMall, galleryDataVillage } from '../data/galleryImage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  name: any;
  private sub: any;
  selectedImage: any;
  galleryImages: any;
  galleryData: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchGallery() {

    if ( this.name == 'village' ) {
      this.galleryImages = gallery;
      this.galleryData = galleryDataVillage;
    } else if ( this.name == 'mall' )
    {
      this.galleryImages = gallery;
      this.galleryData = galleryDataMall;
    }
  }

  setSelectedImage(image){
    this.selectedImage = image;	
 }

 ngOnDestroy() {
  this.sub.unsubscribe();
}

}
