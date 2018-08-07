import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventModuleComponent } from './event/event-module/event-module.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { EventServiceService } from './services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { ViewEventComponent } from './event/view-event/view-event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { AppConstant } from './appConstants';


@NgModule({
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
    FooterComponent,
    EventModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EventServiceService, AppConstant],
  bootstrap: [AppComponent]
})
export class AppModule { }
