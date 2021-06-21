import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   unitSizerLocation3, unitSizerLocation4, unitSizerLocation5, unitSizerLocation6,unitSizerLocation7,unitSizerLocation8,unitSizerLocation9,unitSizerLocation10,unitSizerLocation11,unitSizerLocation12
   } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  tabs: any;
  h2tag: string;
  description: string;
  constructor( private router: Router,
    private canonical: CanonicalService
    ) {
      this.canonical.create();

   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
      this.fetchDetailsLocation1();
  } 
     else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
      this.fetchDetailsLocation2();
  } 
     else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
      this.fetchDetailsLocation3();
  }
   else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
      this.fetchDetailsLocation4();
  }  
  else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
    this.fetchDetailsLocation5();
  } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
    this.fetchDetailsLocation6();
  } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
    this.fetchDetailsLocation7();
  } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
    this.fetchDetailsLocation8();
  } 
  else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
    this.fetchDetailsLocation9();
  }
  else if (this.router.url.includes(`${environment.locationName}/m45`)) {
    this.fetchDetailsLocation10();
  }
  else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
    this.fetchDetailsLocation11();
  }
  else if (this.router.url.includes(`${environment.locationName}/allendale`)) {
    this.fetchDetailsLocation12();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have <br> questions? Call (231) 652-7853`;
  }

  public fetchDetailsLocation2() {
    this.unitSizer = unitSizerLocation2;
    this.h2tag = 'Unit Sizer';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have <br> questions? Call (231) 652-7853`;
    
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have questions? Call (231) 652-7853`;
    this.unitSizer = unitSizerLocation3;
  }

    public fetchDetailsLocation4() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have questions? Call (616) 698-7090`;
    this.unitSizer = unitSizerLocation4;
  }

  public fetchDetailsLocation5() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have questions? Call (231) 652-785!`;
    this.unitSizer = unitSizerLocation5;
  }

  public fetchDetailsLocation6() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (269) 792-2290`;
    this.unitSizer = unitSizerLocation6;
  }

  public fetchDetailsLocation7() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (269) 792-2290!`;
    this.unitSizer = unitSizerLocation7;
  }

  public fetchDetailsLocation8() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (269) 792-2290!`;
    this.unitSizer = unitSizerLocation8;
  }
  public fetchDetailsLocation9() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (616) 698-7090!`;
    this.unitSizer = unitSizerLocation9;
  }
  public fetchDetailsLocation10() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (616) 698-7090`;
    this.unitSizer = unitSizerLocation10;
  }
  public fetchDetailsLocation11() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (269) 792-2290!`;
    this.unitSizer = unitSizerLocation11;
  }

  public fetchDetailsLocation12() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that out! Still have
    questions? Call (616) 895-9707`;
    this.unitSizer = unitSizerLocation12;
  }
}
