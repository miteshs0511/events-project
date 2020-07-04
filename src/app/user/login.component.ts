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
    loginInValid = false;

    constructor(private authService: AuthService, private route: Router) {

    }


    login(formValues) {
        let errorOccur = this.authService.loginUser(formValues.userName, formValues.password);
        if(errorOccur){
          this.loginInValid = true;
        }else{
          this.route.navigate(['events']);
        }
        
    }

    cancel() {
        this.route.navigate(['events']);
    }


}
