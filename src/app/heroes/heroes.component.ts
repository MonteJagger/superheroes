import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero; // undefined

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the *singleton instance of HeroService
  // *singleton - software design pattern that restricts the instantiation of a class to one object.
  constructor(private heroService: HeroService) { }

  // cannot return immediately with hero data because it is synchronous. It does here because it is bock data
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }


  // this new method waits for the observable and emits the array of superheroes
  // this could be instant of later.
  // the subscribe passes the emitted array to the callback, which sets this component's heroes property
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
