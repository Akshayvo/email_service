import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facilityName: string;
  currentYear: any;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private uaParserService: UaParserService,
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
   }

  ngOnInit() {
    this.facilityName = environment.facilityName;
    this.currentYear = new Date().getFullYear();
  }

}
