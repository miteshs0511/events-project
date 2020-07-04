
import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute,Params } from '@angular/router';
import { ISession } from '../shared/event.model';

@Component({

  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

    event: any;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
       this.route.data.forEach((data) => {
          this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
      this.addMode = true;
    }

    saveNewSession(session: ISession) {
      let nextId = 0;
      if(this.event && this.event.sessions && this.event.sessions.length > 0){
        nextId = Math.max.apply(null, this.event.sessions.map(s =>
        s.id));
      }
      session.id = nextId + 1;
      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
    }


    cancelAddSession() {
      this.addMode = false;
    }
}
