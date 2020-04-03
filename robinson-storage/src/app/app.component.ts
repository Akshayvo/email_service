import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UaParserService } from '../app/services/ua-parser.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Robinson Storage';



  constructor(
    private router: Router,
    private angulatics: Angulartics2GoogleAnalytics,
    private uaParserService: UaParserService,
  ) {

  }
  ngOnInit() {
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }
}

