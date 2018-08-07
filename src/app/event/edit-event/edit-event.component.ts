import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventServiceService } from './../../services/event-service.service';
import { EventFormModel } from '../../model/event-form-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  @Input() eventForm: EventFormModel = new EventFormModel();
  @Input() selectedIndex: any;
  @Output() editForm = new EventEmitter<any>();
  @Output() flag = new EventEmitter<string>();
  public eventFormGroup: FormGroup;
  public submitted = false;

  constructor(private _Router: Router, private formBuilder: FormBuilder, private _eventService:EventServiceService) { 
  }

  ngOnInit() {
    this.eventFormGroup = this.formBuilder.group({
          eventName: ['', Validators.required],
          eventDate: ['', Validators.required],
          address: ['', [Validators.required]],
      });
    //this.eventForm = this._eventService.getEventEditRecord().Event;
  }

  showSuccess() {
    //this.toastr.success('Event edited Successsfully!', 'Success!');
  }

  // convenience getter for easy access to form fields
  get f() { return this.eventFormGroup.controls; }

  onClick() {
    this.flag.emit('list');
  }

  backToEvents() {
    this.submitted = true;
    if (this.eventFormGroup.invalid) {
          return;
    }
    this.editForm.emit([this.eventForm, this.selectedIndex]);
    this._eventService.changeMode('list');
  }

  //onSubmit() {
  //    this.submitted = true;
  //    // stop here if form is invalid
  //    if (this.registerForm.invalid) {
  //        return;
  //    }
  //    this._EventServiceService.saveEvent(this.eventForm);
  //    this.showSuccess();
  //  this._Router.navigate(['/event']);

  //  backToEvents() {
  //  this._eventService.changeMode('list');
  //}

  //}
}
