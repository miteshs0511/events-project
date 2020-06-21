import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventsService: EventService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.events = this.route.snapshot.data['events'];
    this.eventsService.getEvents().subscribe(
      events => {
        this.events = events
      }
    )

  }

}
