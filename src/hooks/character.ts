import { useEffect, useState } from 'react';
import { Character } from '../types';

export const useFilteredCharacters = (
  characters: Character[],
  nameFilter: string
): Character[] => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    const comparableNameFilter = nameFilter.trim().toLowerCase();

    setFilteredCharacters(
      comparableNameFilter
        ? characters.filter(character =>
            character.name.toLowerCase().includes(comparableNameFilter)
          )
        : characters
    );
  }, [characters, nameFilter]);

  return filteredCharacters;
};
