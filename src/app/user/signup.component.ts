import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
    
    signUpForm: FormGroup;

    constructor(private authService: AuthService, private route: Router) {

    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
          firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
          lastName: new FormControl('',Validators.required),
          userName: new FormControl('',Validators.required),
          password: new FormControl('',Validators.required),
        });
      }


    signupUser(formValues) {
        this.authService.signupUser(formValues);
        this.route.navigate(['events']);
    }

    cancel() {
        this.route.navigate(['events']);
    }

    validateFirstName() {
    return this.signUpForm.controls.firstName.valid || this.signUpForm.controls.firstName.untouched;
  }

  validateLastName() {
    return this.signUpForm.controls.lastName.valid || this.signUpForm.controls.lastName.untouched;
  }

    
  validateUserName() {
    return this.signUpForm.controls.userName.valid || this.signUpForm.controls.userName.untouched;
  }

  validatePassword(){
    return this.signUpForm.controls.password.valid || this.signUpForm.controls.password.untouched;
  }


}
