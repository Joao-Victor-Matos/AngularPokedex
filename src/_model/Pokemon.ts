import { Type } from 'src/_model/Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
