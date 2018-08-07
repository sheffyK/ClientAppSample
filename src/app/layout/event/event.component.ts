import { Component, OnInit } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { RouterModule, Routes , Router} from '@angular/router';
import { EventServiceService } from './../../services/event-service.service';
import { EventFormModel } from '../../model/event-form-model.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public eventsList: EventFormModel[]=[];


constructor(private _Router:Router, private _EventServiceService:EventServiceService ) {
  this._EventServiceService.saveEvent.subscribe(
    (formData: any) => {
      debugger;
        if(formData!= null) {
         this.addFormToList(formData);
    }
  }
)
 }


  ngOnInit() {
    debugger;
    // this._EventServiceService.getEvents()
    // .subscribe(products => { 
    //   debugger
    //     this.eventsList = products;
    //     this._EventServiceService.setEventsList(this.eventsList);
    // });
    this.eventsList = JSON.parse(JSON.stringify(this._EventServiceService.getEventsList())) ;
  }

 	


  addFormToList(formData):void
  {

    // this.eventsList = this._EventServiceService.getEventsList();
    let eventEditFound = this._EventServiceService.getEventEditRecord();
    if( eventEditFound == null) {
      this.eventsList.push(JSON.parse(JSON.stringify(formData)));
    }
    else{
      this.eventsList.splice(eventEditFound.EventIndex,1,JSON.parse(JSON.stringify(formData)));
      this._EventServiceService.clearEditEventField();
    } 


    this._EventServiceService.setEventsList(this.eventsList);
   }

  navigateToAddEventPage(){
    debugger;
    this._Router.navigate(['/event/add']);
  }


 editEvent(event,index):void{
  debugger;
  // this.eventsList.splice(index,1, event)
  this._EventServiceService.setEventEditRecord(event,index);
  this._Router.navigate(['/event/edit']);
  }

}
