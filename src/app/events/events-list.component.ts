import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
// import { IEvent } from "./shared/index";
import { EventService } from "./shared/event.service";


@Component({
    // selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class ="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event] = 'event'></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
    events:any

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){
        
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
        // this.eventService.getEvents().subscribe(events => {
        //     this.events = events
        // })
    }

    handleThumbnailClick(eventName:any){
        this.toastr.success(eventName)
    }
    
}