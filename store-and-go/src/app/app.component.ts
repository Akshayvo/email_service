import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stor N Lok Self Storage';
  flag: boolean;
  public offsets: number[];
  x: any;
  constructor(
    private router: Router,
    private angulatics: Angulartics2GoogleAnalytics
  ) {

  }
  ngOnInit() {
    this.x = window.matchMedia('(max-width: 600px)');
    this.flag = false;
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }
  public dataShow() {
    if (!this.flag) {
      this.flag = !this.flag;
      if (this.x.matches) {
      document.body.style.overflow = 'hidden';
      }
    } else {
      this.flag = !this.flag;
      if (this.x.matches) {
        document.body.style.overflow = 'auto';
        }
    }
  }
}
