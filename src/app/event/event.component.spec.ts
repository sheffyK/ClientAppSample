import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './../app.component';
import { EventComponent } from './event.component';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './../event/add-event/add-event.component';
import { ViewEventComponent } from './../event/view-event/view-event.component';
import { EditEventComponent } from './../event/edit-event/edit-event.component';
import { LayoutComponent } from './../layout/layout.component';
import { HeaderComponent } from './../layout/header/header.component';
import { FooterComponent } from './../layout/footer/footer.component';
import { EventServiceService } from './../services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstant } from './../appConstants';



describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [EventComponent, AppComponent, AddEventComponent, ViewEventComponent, EditEventComponent,
        LayoutComponent, HeaderComponent, FooterComponent],
      providers: [EventServiceService, AppConstant]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
