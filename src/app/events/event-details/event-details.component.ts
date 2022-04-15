import { Component } from "@angular/core";
// import { IEvent } from "../shared";
import { EventService } from "../shared/index";

@Component({
    templateUrl:'./event-details.component.html',
    styles: [
        `
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px;}

         `
    ]
})
export class EventDetailsComponent{
    event:any
    constructor(private eventService:EventService){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(1)
    }

}