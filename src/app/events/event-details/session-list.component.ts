import { Component, Input } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionlistComponent{
    @Input() sessions?:ISession[]
}