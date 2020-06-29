import { Component, Inject, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/events.service";
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { JQ_TOKEN } from '../common/jQuery.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  eventDateModel: NgbDateStruct;


  @ViewChild('newEventForm') createEventForm: any;

  constructor(private router: Router, private eventService: EventService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    @Inject(JQ_TOKEN) private $: any) {

  }

  ngOnInit() {
    // this.dateTimePickerCall('eventDate', 'L');
    // this.dateTimePickerCall('eventTime', 'LT');
  }

  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.toastr.success('New event created successfully.');
    this.createEventForm.form.markAsPristine();
    this.router.navigate(["/events"]);
  }

  dateTimePickerCall(id, format) {
    this.$('#' + id).datetimepicker({
      format: format,
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        next: "fa fa-arrow-right",
        previous: "fa fa-arrow-left"
      }
    }).on('dp.change', function(e){ 
          this.eventDateModel = e.target.value;    
      });
  }
}
