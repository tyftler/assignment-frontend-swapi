import { useEffect, useState } from 'react';
import { Character } from '../types';

export const useFilteredCharacters = (
  characters: Character[],
  speciesFilter: string,
  filmFilter: string,
  minYearFilter: number,
  maxYearFilter: number
): Character[] => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(
        character =>
          (!speciesFilter ||
            character.species.some(spec => spec === speciesFilter)) &&
          (!filmFilter || character.films.some(film => film === filmFilter)) &&
          (isNaN(minYearFilter) ||
            character.signed_birth_year >= minYearFilter) &&
          (isNaN(maxYearFilter) || character.signed_birth_year <= maxYearFilter)
      )
    );
  }, [characters, speciesFilter, filmFilter, minYearFilter, maxYearFilter]);

  return filteredCharacters;
};
