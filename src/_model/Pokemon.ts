import { Type } from 'src/_model/Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokeImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokeNumber(
    pokemon
  )}.png`;
}

export function getPokeNumber(pokemon: Pokemon): string {
  return leadingZero(pokemon.number);
}

function leadingZero(str: string | number, size: number = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
}
