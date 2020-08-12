import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageUnitIframeComponent } from './storage-unit-iframe.component';

describe('StorageUnitIframeComponent', () => {
  let component: StorageUnitIframeComponent;
  let fixture: ComponentFixture<StorageUnitIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageUnitIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageUnitIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
