import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ // provides an injectable service, accepts metadata object for service
  providedIn: 'root'
})
export class HeroService {

  // Declares a private messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // emits a single value, the array of mock heroes
  }
}
