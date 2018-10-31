import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  breadcrumbActive: any = 'Storage Tips';
  currentActive: any = 'STORAGE TIPS';
  
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `We know moving can be stressful, let our helpful hints and tips make your experience that much easier. Use this tips to save yourself time and frustration!`
    });
    this.titleService.setTitle('Self Storage Tips | Catskill Self Storage, Catskill, NY, 12414');
  }

  ngOnInit() {
  }

}
