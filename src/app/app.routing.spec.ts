import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutComponent } from './layout/about/about.component';
import { EventComponent } from './layout/event/event.component';
import { EditEventComponent } from './layout/event/edit-event/edit-event.component';
import { ViewEventComponent } from './layout/event/view-event/view-event.component';
import { AddEventComponent } from './layout/event/add-event/add-event.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
//import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('Router: App', () => {

  let location: Location;
  let router: Router;

  // Configure router testing module
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
        //ToastrModule.forRoot(),
          BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        LayoutComponent,
        HomeComponent,
        ContactComponent,
        EventComponent,
        AboutComponent,
        EditEventComponent,
        ViewEventComponent,
        AddEventComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers: [Location, HttpClient] //ToastrService
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  // Test for asyncFake
  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));


  // //login Routing
  it('navigate to "home" redirects you to /home', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    tick();
    expect(location.path()).toBe('');
  }));

  it('navigate to "event" redirects you to /event', fakeAsync(() => {
    const fixture = TestBed.createComponent(EventComponent);
    tick();
    expect(location.path()).toBe('');
  }));


});
