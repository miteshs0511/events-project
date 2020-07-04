import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html',
})
export class SignUpComponent {
    
    userName:string;
    password:string;

    constructor(private authService: AuthService, private route: Router) {

    }


    signUp(formValues) {
        this.authService.signupUser(formValues);
        this.route.navigate(['events']);
    }

    cancel() {
        this.route.navigate(['events']);
    }


}
