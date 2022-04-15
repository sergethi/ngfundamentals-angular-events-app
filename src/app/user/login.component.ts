import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles:[`
        em {color:#E05C65; float:right; padding-left:10px;}
    `]
})
export class LoginComponent {
    userName:any
    password:any
    mouseoverLogin: any

    constructor(private authService: AuthService, private router:Router){

    }

    login(formValues:any){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
    
}