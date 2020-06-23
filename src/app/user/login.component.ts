import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    mouseoverLogin:any;
    userName:string;
    password:string;

    constructor(private authService: AuthService, private route: Router) {

    }


    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.route.navigate(['events']);
    }

    cancel() {
        this.route.navigate(['events']);
    }


}
