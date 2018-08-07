import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventServiceService } from './../../services/event-service.service';
import { EventFormModel } from '../../model/event-form-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {


  @Input() eventForm: EventFormModel = new EventFormModel();
  @Output() flag = new EventEmitter<string>();
  @Output() addForm = new EventEmitter<any>();
  public eventFormGroup: FormGroup;
  public submitted = false;

  //   constructor(private _Router:Router, private formBuilder: FormBuilder, private _EventServiceService:EventServiceService) { }
  constructor(private _Router: Router, private formBuilder: FormBuilder, private _eventService: EventServiceService) {

  }
  ngOnInit() {
    debugger;
    this.eventFormGroup = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      address: ['', [Validators.required]],
    });
  }


  onClick() {
    this.flag.emit('list');
  }
  showSuccess() {
    //this.toastr.success('Event added Successfully!', 'Success!');
  }


  // convenience getter for easy access to form fields
  get f() { return this.eventFormGroup.controls; }

  backToEvents() {
    this.submitted = true;
    if (this.eventFormGroup.invalid) {
      return;
    }
    this._eventService.changeMode('list');
  }

  onSubmit() {
    this.submitted = true;
    if (this.eventFormGroup.invalid) {
      return;
    }
    this.addForm.emit(this.eventForm);
    // this.showSuccess();
  }
}
