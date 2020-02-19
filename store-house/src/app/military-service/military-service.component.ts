import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { military, heading } from '../data/military';
import { militaryData } from '../data/view-rates';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-military-service',
  templateUrl: './military-service.component.html',
  styleUrls: ['./military-service.component.scss']
})
export class MilitaryServiceComponent implements OnInit {

  military: any;
  militaryData: any;
  heading: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: ` We offer discounts to our valued military service personnel stationed
      at Fort Drum and deployed around the globe! `
    });
    this.titleService.setTitle('Self Storage Serving Fort Drum | The Store House');
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchMilitary();
  }

  public fetchMilitary() {
    this.military = military;
    this.militaryData = militaryData;
    this.heading = heading;
  }
}
