import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmlogviewerComponent } from './frmlogviewer.component';

describe('FrmlogviewerComponent', () => {
  let component: FrmlogviewerComponent;
  let fixture: ComponentFixture<FrmlogviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmlogviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmlogviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
