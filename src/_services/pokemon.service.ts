import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/_model/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {
    const allPokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    this.http
      .get<any>(allPokeUrl)
      .pipe(
        map((value) => value.results),
        map((value: any) => {
          return from(value).pipe(mergeMap((v: any) => this.http.get(v.url)));
        }),
        mergeMap((value) => value)
      )
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          number: result.id,
          name: result.name,
          image: '',
          types: result.types.map((t: any) => t.type.name),
        };
        this.pokemons[result.id] = pokemon;
      });
  }
}
