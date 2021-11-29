import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../services/link.service';
import { galleryTitle, galleryContent } from '../data/title';
import { galleryHeading } from '../data/heading';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryTitle: string;
  galleryContent: string;
  galleryHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private canonical: CanonicalService
  ) {
    this.fetchMetaData();
    this.meta.updateTag({
      name: 'description',
      content: `${this.galleryContent}`,
    });
    this.titleService.setTitle(`${this.galleryTitle}`);
    this.canonical.create();
   }

  ngOnInit() {
    this.fetchgalleryHeading();
  }

  public fetchMetaData() {
    this.galleryTitle = galleryTitle;
    this.galleryContent = galleryContent;
  }

  public fetchgalleryHeading() {
    this.galleryHeading = galleryHeading;
  }

}
