import { Component, OnInit, OnDestroy } from '@angular/core';
import { gallery } from '../data/galleryImage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  name: string;
  currentActiveTab: any = 'Photos';
  selectedImage: any;
  galleryImages: any;
  private sub: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
  }

  public fetchGallery() {
    this.galleryImages = gallery;
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

 ngOnDestroy() {
  this.sub.unsubscribe();
}

}
