import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styles: [`
        .nav .navbar-nav {font-size: 15px; color:red;}
        #searchForm {margin-right: 100px;}
        li > a.active {color: #F97924; border:1px solid white;}
        @media (max-width: 1200px) {#searchForm{display: none}}

    `
    ]
})
export class navComponent{
    constructor(public auth:AuthService){}
}