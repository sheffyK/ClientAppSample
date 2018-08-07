import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventServiceService } from './../../../services/event-service.service';
import { EventFormModel } from '../../../model/event-form-model.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

   
  public  eventForm : EventFormModel= new EventFormModel();
  public registerForm: FormGroup;
  public submitted = false;

//   constructor(private _Router:Router, private formBuilder: FormBuilder, private _EventServiceService:EventServiceService) { }
  constructor( private toastr: ToastrService,private _Router:Router, private formBuilder: FormBuilder, private _EventServiceService:EventServiceService) { 
    
  }
  ngOnInit() {
    debugger;
      this.registerForm = this.formBuilder.group({
          eventName: ['', Validators.required],
          eventDate: ['', Validators.required],
          address: ['', [Validators.required]],
      });
  }

  showSuccess() {
    this.toastr.success('Event added Successfully!', 'Success!');
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this._EventServiceService.onSaveEventForm(this.eventForm);
      this.showSuccess();
      this._Router.navigate(['/event']);

  }



}
