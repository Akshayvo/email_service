import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { direction } from '../data/location';
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
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    this.fetchDirection();
 }

 public fetchDirection() {
  this.name = '';
  this.directionPoints = direction;
  this.directionHeading = ``;
  this.id = 0;
 }

}
