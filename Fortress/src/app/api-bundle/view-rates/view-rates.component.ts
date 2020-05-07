import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate } from '../../data/view';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Since 1989 Fortress Mini Storage has provided high quality self storage units to Orchard,
                  Sifton and surrounding communities. Reach out today at (360) 254-6464 or check out our rates online!`
      });
      this.titleService.setTitle('Affordable Units Near Orchard, Washington | Fortress Mini Storage');
    }

  ngOnInit() {
    this.fetchViewRate();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
  }
}
