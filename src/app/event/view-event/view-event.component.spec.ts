import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './../../app.component';
import { ViewEventComponent } from './view-event.component';
import { LayoutComponent } from './../../layout/layout.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { EventServiceService } from './../../services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstant } from './../../appConstants';


describe('ViewEventComponent', () => {
  let component: ViewEventComponent;
  let fixture: ComponentFixture<ViewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ViewEventComponent,
      AppComponent, LayoutComponent, HeaderComponent, FooterComponent],
      providers: [EventServiceService, AppConstant]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
