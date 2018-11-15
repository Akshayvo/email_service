import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Catskill';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angulatics: Angulartics2GoogleAnalytics
  ) {

  }
  ngOnInit() {
    // console.log('Init App');
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    // this.angulatics.pageTrack('Hello');
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }
}
