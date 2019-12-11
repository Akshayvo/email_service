import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-rv-rental',
  templateUrl: './rv-rental.component.html',
  styleUrls: ['./rv-rental.component.scss']
})
export class RvRentalComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private router: Router,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you in need of a high-quality, well maintained recreational vehicle for an
                upcoming trip? We have several to pick from! Click to learn more!`
    });
    this.titleService.setTitle('Camper Rentals | Inez Storage');
   }
   public navigate(location: any) {
    this.router.navigate([location]);
    console.log('router is active');
  }

  ngOnInit() {
  }

}
