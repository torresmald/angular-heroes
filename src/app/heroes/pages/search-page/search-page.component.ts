import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroe.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent implements OnInit {
  constructor(private heroesServices:HeroesService){}

  public search:string = ''
  public heroes: Hero[] = []
  public selectedHero?: Hero
  public myControl = new FormControl('');
  public filteredOptions?: Observable<Hero[]>;

  ngOnInit() {

  }

  public onSubmit(){    
    const value = this.myControl.value 
    if(value)
    this.heroesServices.getSuggestions(value).subscribe((value) => {
      this.heroes = value
    })
  }

  public onSelect(value: MatAutocompleteSelectedEvent){
    this.selectedHero = value.option.value
    this.myControl.setValue(this.selectedHero!.superhero)
  }
}
