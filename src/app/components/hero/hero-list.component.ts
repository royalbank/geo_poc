import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services//hero.service';
import { Hero } from '../../models//hero';


@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers:[HeroService]
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  constructor(heroService: HeroService) {
       this.heroes = heroService.getHeroes();

   }

  ngOnInit() {
  }

}
