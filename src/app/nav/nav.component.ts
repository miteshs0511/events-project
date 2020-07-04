import { Component, ElementRef,ViewChild } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/events.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  firstName: string;

  @ViewChild('sidenav') sideNav: ElementRef;
  
 constructor(private authService: AuthService,
  private eventService: EventService) {

 }

 isAuthenticated(){
   let user = this.authService.getCurrentUser();
   if(user){
     this.firstName = user.firstName;
     return true;
   }
   else{
     return false;
   }
 }

 searchSessions(searchTerm) {
  this.eventService.searchSessions(searchTerm).subscribe(sessions => {
    this.foundSessions = sessions;
  });
 }

 openNav(){
   console.log(this.sideNav);
   this.sideNav.nativeElement.setAttribute('style','width:250px');
 }

 closeNav(){
   this.sideNav.nativeElement.setAttribute('style','width:0px');
 }
}
