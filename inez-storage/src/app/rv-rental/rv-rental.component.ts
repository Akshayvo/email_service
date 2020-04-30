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
      content: `Inez Storage offers camper rentals to our clients in Inez & Victoria, TX.
                Contact us to see what campers we have available at our storage facility!`
    });
    this.titleService.setTitle('Camper Rentals in Inez & Victoria TX | Inez Storage');
   }
   public navigate(location: any) {
    this.router.navigate([location]);
    console.log('router is active');
  }

  ngOnInit() {
  }

}
