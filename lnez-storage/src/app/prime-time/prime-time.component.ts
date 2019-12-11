import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { primeTime } from '../data/camper';

@Component({
  selector: 'app-prime-time',
  templateUrl: './prime-time.component.html',
  styleUrls: ['./prime-time.component.scss']
})
export class PrimeTimeComponent implements OnInit {
  primeTimeImages: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Rent our 2019 Prime Time Tracer with 2 Slide Outs! Review the
                details and call our office to learn about availability!`
   });
   this.titleService.setTitle('2019 Prime Time Tracer With 2 Slide Outs Rental | Inez Storage');
  }

  ngOnInit() {
    this.fetchGallery();
  }
  public fetchGallery() {
    this.primeTimeImages = primeTime;
  }

}
