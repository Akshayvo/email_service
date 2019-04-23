import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Storage King';
  rent: any;
  flag: boolean;
  public offsets: number[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private angulatics: Angulartics2GoogleAnalytics,
  ) {
  }
  ngOnInit() {
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    this.rent = this.route.snapshot.paramMap.get('rent');
  }

}
