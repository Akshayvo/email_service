import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { WindowScrolling } from './window-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngStarterPack';
  flag: boolean;
  public offsets: number[];
  private windowScrolling: WindowScrolling;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angulatics: Angulartics2GoogleAnalytics,
    windowScrolling: WindowScrolling
  ) {
    this.windowScrolling = windowScrolling;
    this.offsets = this.range( 1, 20 );
  }
  ngOnInit() {
    this.flag = false;
    // console.log('Init App');
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    // this.angulatics.pageTrack('Hello');
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }


  public dataShow() {
    if (this.flag === false) {
      this.flag = true;
      this.windowScrolling.disable();
    } else {
      this.flag = false;
      this.windowScrolling.enable();
    }
  }

  private range( from: number, to: number ): number[] {

    let values = [];

    for ( let i = from ; i <= to ; i++ ) {

        values.push( i );

    }

    return( values );

}


}
