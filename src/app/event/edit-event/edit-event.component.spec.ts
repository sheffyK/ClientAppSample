import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './../../app.component';
import { EditEventComponent } from './edit-event.component';
import { LayoutComponent } from './../../layout/layout.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { EventServiceService } from './../../services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstant } from './../../appConstants';

describe('EditEventComponent', () => {
  let component: EditEventComponent;
  let fixture: ComponentFixture<EditEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [EditEventComponent, AppComponent, LayoutComponent, HeaderComponent, FooterComponent],
      providers: [EventServiceService, AppConstant]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
