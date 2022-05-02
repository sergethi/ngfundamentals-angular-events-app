import { Component } from "@angular/core";
// import { IEvent } from "../shared";
import { EventService, ISession } from "../shared/index";

@Component({
    templateUrl:'./event-details.component.html',
    styles: [
        `
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px;}
        a {cursor:pointer}

         `
    ]
})
export class EventDetailsComponent{
    event:any
    addMode?:boolean
    filterBy: string = 'all'
    sortBy: string = 'name'
    constructor(private eventService:EventService){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(1)
        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
    addSession(){
        this.addMode = true
    }
    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map((s:any) => {
            s.id
        }));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }
    cancelAddSession(){
        this.addMode = false
    }

}