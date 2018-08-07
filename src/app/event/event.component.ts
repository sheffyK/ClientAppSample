import { Component, OnInit } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { RouterModule, Routes, Router } from '@angular/router';
import { EventServiceService } from './../services/event-service.service';
import { EventFormModel } from '../model/event-form-model.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public eventsList: EventFormModel[] = [];
  public mode: any = 'list';
  public eventForm: EventFormModel = new EventFormModel();
  public selectedIndex: any;
  constructor(private _Router: Router, private _EventServiceService: EventServiceService) { 
    //this._EventServiceService.mode.subscribe(
    //  (modes: any) => {
    //    if (modes != '') {
    //      this.mode(modes);
    //    }
    //  }
    //)
  }
  onOpen(dta) {
    this.mode = dta;
  }

  addForm(eventForm) {
     this.mode = 'list';
    this.eventsList.push(eventForm);
  }

  editForm(eventForm) {
    debugger;
    this.eventForm = eventForm[0];
    this.eventsList.splice(eventForm[1], 1, this.eventForm);
   // this.eventsList.push(this.eventForm);
    this.mode = 'list';
  }

  ngOnInit() {
     this._EventServiceService.getEvents()
     .subscribe(res => { 
       this.eventsList = res;
     });
  }

  viewEvent(event, index) {
    this.eventForm = event;
    this.mode = 'view';
  }


  addFormToList(formData): void {

    // this.eventsList = this._EventServiceService.getEventsList();
    let eventEditFound = this._EventServiceService.getEventEditRecord();
    if (eventEditFound == null) {
      this.eventsList.push(JSON.parse(JSON.stringify(formData)));
    }
    else {
      this.eventsList.splice(eventEditFound.EventIndex, 1, JSON.parse(JSON.stringify(formData)));
      this._EventServiceService.clearEditEventField();
    }


  //  this._EventServiceService.setEventsList(this.eventsList);
  }

  navigateToAddEventPage() {
    debugger;
    //this._Router.navigate(['/event/add']);
    this.mode = 'add';
  }


  editEvent(event, index): void {
    debugger;
    this.eventForm = event;
    this.selectedIndex = index;
    this.mode = 'edit';
  }

  // convenience getter for easy access to form fields
  //get f() { return this.eventFormGroup.controls; }

  //onSubmit() {
  //  this.submitted = true;
  //  if (this.eventFormGroup.invalid) {
  //    return;
  //  }
  //  this._EventServiceService.saveEvent(this.eventForm).subscribe(res => {
  //    console.log(res);
  //  });;
    // this.showSuccess();
  //}

}
