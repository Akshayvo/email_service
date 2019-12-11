import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camper-rental',
  templateUrl: './camper-rental.component.html',
  styleUrls: ['./camper-rental.component.scss']
})
export class CamperRentalComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  public navigate(location: any) {
    this.router.navigate([location]);
    console.log('router is active');
  }

}
