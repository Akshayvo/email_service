import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  name: string;
  id: number;
  directionPoints: any;
  directionHeading: string;
  constructor(private router: Router,
    private canonical: CanonicalService
    ) { 
      this.canonical.create();
    }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    
 }

}
