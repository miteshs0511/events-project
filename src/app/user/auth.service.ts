import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    currentUser;

    userList = [ {
      password: 'admin',
      userName: 'admin',
      firstName: 'Mitesh',
      lastName: 'Sanchaniya'
    }]

    constructor(){
    }

    loginUser(userName: string, password: string):boolean {
        this.userList.forEach(element =>{
          if(element.userName === userName && element.password === password){
            this.currentUser = element;
            return true;
          }
        })
        return false;
    }

    signupUser(formValues){
      this.currentUser = {
            userName: formValues.userName,
            password:formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName
        };
      this.userList.push(formValues);  
    }

    getCurrentUser(){
      return this.currentUser;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
