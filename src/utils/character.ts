import { Character, Film, Species, Starship } from '../types';
import { parseSignedYear } from './year';

export const getPopulatedCharacters = (
  characters: Character[],
  species: Species[],
  films: Film[],
  starships: Starship[]
): Character[] => {
  const characterUrlIdRegex = /\/(\d+)\/$/;

  return characters.map(character => {
    const id = character.url.match(characterUrlIdRegex)?.[1];
    const populatedSpecies = character.species.reduce(
      (speciesNames, speciesUrl) => {
        const speciesName = species.find(spec => spec.url === speciesUrl)?.name;
        return speciesName ? [...speciesNames, speciesName] : speciesNames;
      },
      [] as string[]
    );
    const populatedFilms = character.films.reduce((filmNames, filmUrl) => {
      const filmName = films.find(film => film.url === filmUrl)?.title;
      return filmName ? [...filmNames, filmName] : filmNames;
    }, [] as string[]);
    const populatedStarships = character.starships.reduce(
      (starshipNames, starshipUrl) => {
        const starshipName = starships.find(
          starship => starship.url === starshipUrl
        )?.name;
        return starshipName ? [...starshipNames, starshipName] : starshipNames;
      },
      [] as string[]
    );

    return {
      ...character,
      id,
      species: populatedSpecies,
      films: populatedFilms,
      starships: populatedStarships,
      signed_birth_year: parseSignedYear(character.birth_year)
    };
  });
};
