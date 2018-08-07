import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { ViewEventComponent } from './event/view-event/view-event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventModuleComponent } from './event/event-module/event-module.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'event',
    component: EventModuleComponent,
    children: [
      {
        path: '',
        component: EventComponent
      },
      {
        path: 'edit',
        component: EditEventComponent
      },
      {
        path: 'view',
        component: ViewEventComponent
      },
      {
        path: 'add',
        component: AddEventComponent
      }

    ]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
