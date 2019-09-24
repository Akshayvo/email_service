import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit,Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { rvSiteRentalContent } from '../data/rv-site-rental';

@Component({
  selector: 'app-rv-site-rental',
  templateUrl: './rv-site-rental.component.html',
  styleUrls: ['./rv-site-rental.component.scss']
})
export class RvSiteRentalComponent implements OnInit {
  rvSiteRentalContent:any;
  
  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We also offer RV site rentals! Water, sewer, garbage, tourist tax, and mowing are all included! Call today!`
    });
    this.titleService.setTitle('Recreational Vehicle Site Rental | The Coach House');
   }

  ngOnInit() {
    this.fetchRvRentalContent();
  }
    public fetchRvRentalContent() {
      this.rvSiteRentalContent = rvSiteRentalContent;
    }
}
