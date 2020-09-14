import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { script } from '../../data/script';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignOutService } from '../services/sign-out.service';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit, OnDestroy {

  script: any;
  strConfirmation: string;
  strAccessCode: string;
  tokenExit: string;


  private signOutSubscribe$: Subscription;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private dataSharingService: DataSharingService,
    public router: Router,
    private signOutService: SignOutService,
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `We've received your reservation! One of our friendly staff will be in touch!`
    });
    this.titleService.setTitle('Thank You For Reserving Your Unit at Storage Town!');
  }

  ngOnInit() {
    this.fetchScript();
    this.strConfirmation = this.dataSharingService.strConfirmation;
    this.strAccessCode = this.dataSharingService.strAccessCode;

    if (localStorage.getItem('strTenantToken')) {
      this.tokenExit = localStorage.getItem('strTenantToken');
    }
  }

  public fetchScript() {
    this.script = script;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        if (!!localStorage.getItem('APIKey')) {
          localStorage.removeItem('APIKey');
        }
        this.router.navigate(['/']);
      }, (err) => {
      }
      );
  }

  public ngOnDestroy(): void {
    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }
    window.removeEventListener('beforeunload', (event) => {
    });
  }

}
