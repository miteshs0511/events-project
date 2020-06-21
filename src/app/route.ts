import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailComponent } from './events/event-details/events-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './common/errors/404error.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventResolver } from './events/event.resolver.service';

export const appRoutes: Routes = [
    {path : 'events/new', component : CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path : 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path : 'events/:id', component : EventsDetailComponent, resolve: {event: EventResolver}},
    {path : 'events/session/new', component : CreateSessionComponent},
    {path : '404', component: Error404Component},
    {path : '', redirectTo: '/events', pathMatch: 'full'},
    {path : 'user', loadChildren:  () => import('./user/users.module').then(m => m.UserModule) }
];
