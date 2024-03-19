import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {

  @Input()
  public hero?:Hero

  
}
