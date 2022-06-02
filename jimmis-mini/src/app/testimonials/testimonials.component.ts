import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { testimonials } from '../data/home';
import { CanonicalService } from "../services/canonical.service";
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonialsData: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Visit the URL and find out what customers are saying about our unbeatable service
      and quality. Serving Rochester Gates and Brighton NY.`
    });
    this.canonical.create();
    this.titleService.setTitle('Jimmys Minis Self Storage Rochester NY - Testimonials |  Gates, Brighton NY');
   }

  ngOnInit() {
    this.testimonials();
  }
  public testimonials() {
    this.testimonialsData = testimonials;
  }
}
