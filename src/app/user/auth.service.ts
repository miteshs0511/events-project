import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    currentUser;

    constructor(){
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        };
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
