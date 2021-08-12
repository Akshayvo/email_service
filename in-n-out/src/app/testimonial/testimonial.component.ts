import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogTestimonialPage, twitterTestimonialPage } from '../data/script';
import { testimonialTitle, testimonialContent } from '../data/title';
import { carouselData } from '../data/carousel';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  storagePoints: any;
  storageTips: any;
  currentActive: any = 'Testimonials';
  breadcrumbActive: any = 'Testimonials';
  og: any;
  twitter: any;
  testimonialTitle: string;
  testimonialContent: string;
  carouselData: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService
    ) {
      this.canonical.create();
      this.fetchMetaData();
      this.fetchOg();
      this.fetchTwitter();
      this.og.forEach(element => {
        this.meta.addTag({
          property: element.property,
          content: element.content
        })
      });
  
      this.twitter.forEach(element => {
        this.meta.addTag({
          name: element.name,
          content: element.content
        })
      });
    this.meta.addTag({
      name: 'description',
      content: `${this.testimonialContent}`
    });
    this.titleService.setTitle(`${this.testimonialTitle}`);
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    window.scrollTo(0, 0);
    this.carouselData = carouselData;
  }

  public fetchOg() {
    this.og = ogTestimonialPage;
}

public fetchTwitter() {
    this.twitter = twitterTestimonialPage;
}

public fetchMetaData() {
  this.testimonialTitle = testimonialTitle;
  this.testimonialContent = testimonialContent;
}


  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
  }

  public fetchstorageTips() {
    this.storageTips = storageTips;
  }

}
