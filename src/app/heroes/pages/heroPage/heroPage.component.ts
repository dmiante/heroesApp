import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './heroPage.component.html',
  styleUrls: ['./heroPage.component.css'],
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero

  constructor(
    private heroServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroServices.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list'])
      return this.hero = hero
    })
  }

  goBack(): void{
    this.router.navigateByUrl('/heroes/list')
  }
 }
