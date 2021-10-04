import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { Router } from '@angular/router';

import { DataSharingService } from '../services/data-sharing.service';


@Injectable()
export class AppResolver implements Resolve<any> {

  apiKey: string;

  constructor(
    public router: Router,
    private dataSharingService: DataSharingService,
  ) {}

  resolve() {
    return this.dataSharingService.getAPIKey();
  }
}
