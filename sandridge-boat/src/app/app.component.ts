import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';
import { filter, map, mergeMap, pairwise } from 'rxjs/operators';
import { WINDOW } from '@ng-toolkit/universal';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from './services/navigation.service';
import { messages } from './data/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = `${messages.routeChangePrevent}`;
  flag: boolean;
  public offsets: number[];
  x: any;
  previousUrl: string;
  currentUrl: string;
  refferURL: string;

  // Routing code
  previousUrlViaNavigationEnd$ = new BehaviorSubject<string>(null);
  currentUrlViaNavigationEnd$ = new BehaviorSubject<string>(null);

  previousUrlViaRoutesRecognized$ = new BehaviorSubject<string>(null);
  currentUrlViaRoutesRecognized$ = new BehaviorSubject<string>(null);

  // Via RouterHistoryService
  previousUrlViaRouterHistoryService$ = this.routerHistoryService.previousUrl$;
  currentUrlViaRouterHistoryService$ = this.routerHistoryService.currentUrl$;

  // logs: { event: string; message: string }[] = [];

  constructor(
    private router: Router,
    private angulatics: Angulartics2GoogleAnalytics,
    private routerHistoryService: NavigationService,
    @Inject(WINDOW) private window: Window,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      console.log(this.currentUrl, this.previousUrl)
      sessionStorage.setItem("refferURL",this.currentUrl);
    });

    // Event logging only
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routerHistoryService.updateHistoryLog({
          event: 'NavigationStart',
          message: JSON.stringify(event)
        })
      }

      if (event instanceof NavigationEnd) {
        this.routerHistoryService.updateHistoryLog({
          event: 'NavigationEnd',
          message: JSON.stringify(event)
        })
      }
    });

    // Via Navigation End Event
    this.currentUrlViaNavigationEnd$.next(router.url);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrlViaNavigationEnd$.next(
          this.currentUrlViaNavigationEnd$.value
        );
        this.currentUrlViaNavigationEnd$.next(event.urlAfterRedirects);
      }
    });

    // Via RoutesRecognized
    router.events
      .pipe(
        filter(evt => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe(
        ([previous, current]: [RoutesRecognized, RoutesRecognized]) => {
          this.previousUrlViaRoutesRecognized$.next(previous.urlAfterRedirects);
          this.currentUrlViaRoutesRecognized$.next(current.urlAfterRedirects);
        }
      );
  }

  ngOnInit() {
    this.refferURL = this.previousUrl;
    this.x = window.matchMedia('(max-width: 600px)');
    this.flag = false;
    this.angulatics.eventTrack('Dev', { category: 'App initialized' });
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