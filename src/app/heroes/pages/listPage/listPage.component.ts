import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './listPage.component.html',
  styleUrls: ['./listPage.component.css'],
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = []

  constructor(private HeroesService: HeroesService) {}
  ngOnInit(): void {
    this.HeroesService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
}
