import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';


@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

}
