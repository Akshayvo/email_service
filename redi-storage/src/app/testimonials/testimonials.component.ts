import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { testimonials } from '../data/home';

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
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Visit the URL and find out what customers are saying about our unbeatable service
      and quality. Serving Rochester Gates and Brighton NY.`
    });
    this.titleService.setTitle('Redi Storage - Windham Rochester NY - Testimonials |  Gates, Brighton NY');
   }

  ngOnInit() {
    this.testimonials();
  }
  public testimonials() {
    this.testimonialsData = testimonials;
  }
}
