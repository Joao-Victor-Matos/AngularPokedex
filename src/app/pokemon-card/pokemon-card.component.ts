import { Component, Input } from '@angular/core';
import { Pokemon, getPokeNumber, getPokeImage } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public getPokeNumber = getPokeNumber;
  public getPokeImage = getPokeImage;
}
