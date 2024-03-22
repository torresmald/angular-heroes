import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {
constructor(private heroesService: HeroesService, private routes: ActivatedRoute,  private router: Router,
  private _snackBar: MatSnackBar
  ) {
  
}
ngOnInit(): void {
  if(!this.router.url.includes('edit')) return
  this.routes.params
      .pipe(switchMap(({ id }) => this.heroesService.getHero(id)))
      .subscribe((hero: Hero | undefined) => {        
        if(!hero) return
        this.heroForm.reset(hero)
        return
      });
    
}
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', {nonNullable:true}),        
    publisher: new FormControl<Publisher>(Publisher.DCComics , {nonNullable:true}),        
    alter_ego: new FormControl('', {nonNullable:true}),        
    first_appearance: new FormControl('', {nonNullable:true}), 
    characters: new FormControl('', {nonNullable:true}),       
    alt_img: new FormControl('')          
  })

  get CurrentHero(): Hero{
    const hero = this.heroForm.value as Hero
    return hero
  }
  public onSubmit(){
    if(!this.heroForm.valid) return

    if(this.CurrentHero.id){
      this.heroesService.updateHero(this.CurrentHero).subscribe((value) => {
        console.log(value)
      })
    } else{
      this.heroesService.addHero(this.CurrentHero).subscribe((value) => {
        this._snackBar.open('Message archived', 'Undo', {
          duration: 3000
        });
        this.router.navigate(['/heroes/list'])
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
