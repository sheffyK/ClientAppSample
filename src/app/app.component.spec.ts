import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { ViewEventComponent } from './event/view-event/view-event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EventModuleComponent } from './event/event-module/event-module.component';
import { EventServiceService } from './services/event-service.service';
import { AppConstant } from './appConstants';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,

        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        EventModuleComponent,
        AddEventComponent
      ],
      providers: [
        EventServiceService, AppConstant
      ]
    }).compileComponents();
  }));
  //it('should create the app', async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app).toBeTruthy();
  //}));
  //it(`should have as title 'app'`, async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app.title).toEqual('app');
  //}));
  //it('should render title in a h1 tag', async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  //}));
});
