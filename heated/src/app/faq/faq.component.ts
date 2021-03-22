// import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { faqContent } from '../data/faq';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqContent: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Do you have a question about Rifle Self Storage? Take a moment to read our Frequently Asked Questions page!`
    });
    this.titleService.setTitle('Frequently Asked Questions | Heated Self Storage');
    this.canonical.create();
  }

  ngOnInit() {
    this.fetchFaqContent();
  }

  public fetchFaqContent(){
    this.faqContent = faqContent;
  }
}
