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
        let userFound = false;
        this.userList.forEach(element =>{
          if(element.userName === userName && element.password === password){
            this.currentUser = element;
            userFound = true;
          }
        })
        return userFo;
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

    logOut(){
      this.currentUser = undefined;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
