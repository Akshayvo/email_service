import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logo: any;
  locationId: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe(path => {
      this.isSomePage();
    });
  }

  public isSomePage() {
   if (this.router.url.includes('/location/1321-north-jefferson-st-location'))  {
      this.locationId = 1;
    }
  }
}

