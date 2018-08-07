import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventFormModel } from '../../model/event-form-model.model';
import { EventServiceService } from '../../services/event-service.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  @Input() eventForm: EventFormModel = new EventFormModel();
  @Output() flag = new EventEmitter<string>();
  constructor(private _eventService: EventServiceService) { }

  ngOnInit() {
    console.log(this.eventForm);
  }

  backToEvents() {
    this.flag.emit('list');
  }

}
