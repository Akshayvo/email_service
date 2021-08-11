import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { DataSharingService } from '../services/data-sharing.service';


@Injectable()
export class AppResolver implements Resolve<any> {

  apiKey: string;

  constructor(
    public router: Router,
    private dataSharingService: DataSharingService,
  ) {}

  resolve() {
    if (this.router.url.includes('pay-rent')) {
this.apiKey = this.dataSharingService.getAPIKey();
    } else {
      this.apiKey = environment.APIKey
    }
    return this.apiKey;
  }
}
