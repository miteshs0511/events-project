import { Component, Inject, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/events.service";
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { JQ_TOKEN } from '../common/jQuery.service';

@Component({
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent {
  newEvent;

  @ViewChild('newEventForm') createEventForm: any;

  constructor(private router: Router, private eventService: EventService,  
  @Inject(TOASTR_TOKEN) private toastr: Toastr,
  @Inject(JQ_TOKEN) private $: any) {}
  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.toastr.success('New event created successfully.');
    this.createEventForm.form.markAsPristine();
    this.router.navigate(["/events"]);
  }

  eventDateClick(){
    this.$('#eventDate').datetipicker({});
  }
}
