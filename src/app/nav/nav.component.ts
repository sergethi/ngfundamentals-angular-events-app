import { Component } from "@angular/core";

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styles: [`
        .nav .navbar-nav {font-size: 15px; color:red;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm{display: none}}

    `
    ]
})
export class navComponent{}