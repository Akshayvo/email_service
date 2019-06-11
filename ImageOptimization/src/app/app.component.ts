import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TestService} from './services/test.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Catskill';
  constructor(
    private router: Router,
    private angulatics: Angulartics2GoogleAnalytics,
    @Inject('ua-parser-js') public UAParser:any
  ) {

  }
  ngOnInit() {
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }
}
