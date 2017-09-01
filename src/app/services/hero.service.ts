import { Injectable } from '@angular/core';
import { Hero } from '../models//hero';


@Injectable()
export class HeroService {
  heroArray: Hero[];
  constructor() {
    this.heroArray = new Array<Hero>();
    this.heroArray.push(new Hero('h1', 123));
    this.heroArray.push(new Hero('h2', 345));
    console.log(this.heroArray);
  }
  getHeroes() { return this.heroArray; }

}
