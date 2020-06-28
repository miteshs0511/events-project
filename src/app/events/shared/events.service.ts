import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EventService {

  constructor(
    private http: HttpClient
  ) {
  }

getEvents():Observable<IEvent[]>{
    let subject = new Subject<IEvent[]>();
    setTimeout(() =>{
      subject.next(Events);
      subject.complete();
    },100)
    return subject;
    // return Events;
}

getEvent(id: number): IEvent{
  return Events.find(event => event.id === +id)
}


searchSessions(searchTerm: string) {
  const term = searchTerm.toLocaleLowerCase();
  let results: ISession[] = [];

  Events.forEach(event => {
    let matchingSessions = event.sessions.filter(session =>
      session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session: any) => {
        session.eventId = event.id;
        return session;
      });
      results = results.concat(matchingSessions);
    });
    const emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
}

saveEvent(event) {
  event.id = 999;
  event.session = [];
  Events.push(event);
}

updateEvent(event) {
  const index = Events.findIndex(x => x.id = event.id);
  Events[index] = event;
}
}

const Events: IEvent[] = [
    {
      id: 1,
      name: 'Firebase Live',
      date: new Date('6/23/2020'),
      time: '10:00 am',
      price: 599.99,
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: [
        {
          id: 1,
          name: 'Unit testing security rules with the new Firebase emulator suite',
          presenter: 'Todd Kerpelman',
          duration: '30 minutes',
          level: 'Intermediate',
          abstract: `Unit testing is like flossing; we all know we should be doing it, but not all of us actually are. There’s no better subject to unit test than security rules, the main line of defense between your database and all of those untrustworthy clients. In this video, we'll teach you how to efficiently unit test your security rules using some helpful libraries and the latest Firebase emulator suite.`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: 'Codelab: Get to know Firebase for web',
          presenter: 'Rachel Saunders',
          duration: '30 minutes',
          level: 'Intermediate',
          abstract: `Build a web app from scratch with Firebase and the StackBlitz online editor. You'll use basic HTML and JavaScript to talk to Firebase. This is a great introduction to using the Firebase console and integrating Firebase into an app. No extensive prior knowledge or software installations are needed.`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: 'The Local Firebase Emulator UI in 15 minutes',
          presenter: 'David East & Tyler Crowe',
          duration: '1 Hour',
          level: 'Advanced',
          abstract: `The Firebase emulator suite fundamentally changes how you build on Firebase by making it possible to run services locally on your machine. Now, each developer can use a safe sandbox environment for feature development. In this video, you will learn how to set up these emulators so you can develop without network latency, create better unit and integration tests, run Firebase in continuous integration, and experiment without the fear of breaking everything.`,
          voters: ['rachelmario']
        },
        {
          id: 4,
          name: 'Codelab: Cloud Firestore Web',
          presenter: 'Brad Green',
          duration: '1 Hour',
          level: 'Advanced',
          abstract: `How to efficiently and securely store and sync your app's data in the cloud with Cloud Firestore. `,
          voters: []
        },
        {
          id: 5,
          name: 'Angular 4 and Firebase',
          presenter: 'David East',
          duration: 'Half Day',
          level: 'Intermediate',
          abstract: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
      ]
    },
    {
      id: 2,
      name: 'FLUTTER DAY',
      date: new Date('6/25/2020'),
      time: '9:00 am',
      price: 950.00,
      location: {
        address: 'The NG-NL Convention Center & Scuba Shop',
        city: 'Amsterdam',
        country: 'Netherlands'
      },
      sessions: [
        {
          id: 1,
          name: 'Building beautiful UIs with Flutter and CodePen',
          presenter: 'Zoey Fan, Alex Vazquez & Mariano Zorrilla',
          duration: 'Full Day',
          level: 'Beginner',
          abstract: `To discover how you can create beautiful UIs on CodePen’s new Flutter editor.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: 'Flutter DevTools',
          presenter: 'Patrick Stapleton',
          duration: '1 Hour',
          level: 'Intermediate',
          abstract: `Angular 4's source code may be over 25 million lines of code, but it's really
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: 'Bob Nystrom and Kevin Moore',
          presenter: 'Lukas Ruebbelke',
          duration: '30 minutes',
          level: 'Beginner',
          abstract: `Hear from Bob and Kevin on the upcoming null-safety feature in Dart.`,
          voters: ['bradgreen']
        },
      ]
    },
    {
      id: 3,
      name: 'web.dev',
      date: new Date('6/30/2020'),
      time: '9:00 am',
      price: 559.00,
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "What's New in Speed Tooling",
          presenter: 'Elizabeth Sweeny',
          duration: '1 Hour',
          level: 'Intermediate',
          abstract: `Our understanding of how to effectively measure and optimize a users' experience is continually evolving, and we keep our metrics and tooling updated to reflect the latest in our learnings. This talk will cover where to measure your Core Web Vitals in the lab and in the field, as well as how to leverage the newest features and products to build and maintain exceptionally fast experiences for all of your users.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar']
        },
        {
          id: 2,
          name: 'Optimize for Core Web Vitals',
          presenter: 'Addy Osmani',
          duration: '1 Hour',
          level: 'Intermediate',
          abstract: `In this hands-on talk, we'll cover tips & tricks for optimizing your user-experience to meet the Core Web Vitals. We'll use tools like Lighthouse & DevTools, show you code snippets for fixes and highlight how you too can get fast and stay fast.`,
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 3,
          name: 'Mastering the Chrome UX Report on BigQuery',
          presenter: 'Rick Viscomi',
          duration: '30 minutes',
          level: 'Intermediate',
          abstract: `There is so much information in the Chrome UX Report dataset on BigQuery, it could feel overwhelming at first. We've been hard at work making sure that the treasure trove of web transparency data is accessible to every developer. Learn how to query the Chrome UX Report using our new summary datasets and shortcut functions, so you can extract insights quickly and cheaply like a pro.`,
          voters: ['bradgreen', 'martinfowler', 'johnpapa']
        },
        {
          id: 4,
          name: 'How to Analyze Your JavaScript Bundles',
          presenter: 'Shai Reznik',
          duration: '30 minutes',
          level: 'Beginner',
          abstract: `Learn how to analyze your bundled JavaScript code and to spot common issues that can easily bloat up your application size.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
        },
        {
          id: 5,
          name: 'Debugging JavaScript SEO issues',
          presenter: 'Martin Splitt',
          duration: '1 Hour',
          level: 'Beginner',
          abstract: `Diagnosing common JavaScript SEO issues and helpful steps to debug them!`,
          voters: ['bradgreen', 'martinfowler']
        }
      ]
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: new Date('6/10/2021'),
      time: '8:00 am',
      price: 800.00,
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: 'Diversity in Tech',
          presenter: 'Sir Dave Smith',
          duration: '1 Hour',
          level: 'Beginner',
          abstract: `Yes, we all work with cyborgs and androids and Martians, but
          we probably don't realize that sometimes our internal biases can make it difficult for
          these well-designed coworkers to really feel at home coding alongside us. This talk will
          look at things we can do to recognize our biases and counteract them.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: 'World Peace and Angular',
          presenter: 'US Secretary of State Zach Galifianakis',
          duration: '1 Hour',
          level: 'Beginner',
          abstract: `Angular has been used in most of the major peace brokering that has
          happened in the last decade, but there is still much we can do to remove all
          war from the world, and Angular will be a key part of that effort.`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: 'Using Angular with Androids',
          presenter: 'Dan Wahlin',
          duration: 'Half Day',
          level: 'Advanced',
          abstract: `Androids may do everything for us now, allowing us to spend all day playing
          the latest Destiny DLC, but we can still improve the massages they give and the handmade
          brie they make using Angular 4. This session will show you how.`,
          voters: ['igorminar', 'johnpapa']
        },
      ]
    },
  ];
