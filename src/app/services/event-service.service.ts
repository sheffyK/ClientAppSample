import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EventFormModel } from '../model/event-form-model.model';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../appConstants';

@Injectable()
export class EventServiceService {


  public eventEdit: any;
  public mode = new Subject<any>();

  saveEvent(formdata: any) {
    return this._http.post<EventInterface[]>(this._appConstant.saveEventApi, formdata);
  }

  changeMode(mode:any) {
    this.mode.next(mode);
  }

  getEventEditRecord() {
    return this.eventEdit;
  }

  setEventEditRecord(event: any, index) {
    let model = {
      Event: event,
      EventIndex: index,
    }
    return this.eventEdit = model;
  }

  clearEditEventField() {
    this.eventEdit = null;
  }

  //setEventsList(events:any)
  //{
  //this.formList = events;
  //}




  constructor(private _http: HttpClient, private _appConstant: AppConstant) { }

  /** GET Events from the server */

  getEvents(): Observable<EventInterface[]> {
    debugger;
    return this._http.get<EventInterface[]>(this._appConstant.getEventsApi);
  }

}

interface EventInterface {
  id: number;
  eventName: string;
  eventDate: string;
  address: string;
}
