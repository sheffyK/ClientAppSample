import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './../../app.component';
import {  FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event.component';
import { LayoutComponent } from './../../layout/layout.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { EventServiceService } from './../../services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstant } from './../../appConstants';

describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [AddEventComponent, AppComponent, LayoutComponent, HeaderComponent, FooterComponent],
      providers: [EventServiceService, AppConstant]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.eventFormGroup.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let eventName = component.eventFormGroup.controls['eventName'];
    expect(eventName.valid).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
