import { Character } from './character';
import { Film } from './film';
import { Species } from './species';
import { Starship } from './starship';

export interface Resources {
  characters: Character[];
  species: Species[];
  films: Film[];
  starships: Starship[];
}

export interface ResourcePageResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
