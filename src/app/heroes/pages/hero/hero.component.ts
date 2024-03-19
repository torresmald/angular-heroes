import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroe.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}
  public hero?: Hero;
  ngOnInit(): void {
    this.routes.params
      .pipe(switchMap(({ id }) => this.heroesService.getHero(id)))
      .subscribe((hero: Hero | undefined) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        return this.hero = hero
      });
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }
}
