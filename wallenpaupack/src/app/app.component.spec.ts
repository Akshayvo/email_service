import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD
  it(`should have as title 'Wallenpaupack Self Storage'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Wallenpaupack Self Storage');
=======
  it(`should have as title 'Storage Plus of Baldwin County'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Storage Plus of Baldwin County');
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Wallenpaupack Self Storage Website!');
=======
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Storage Plus of Baldwin County Website!');
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }));
});
