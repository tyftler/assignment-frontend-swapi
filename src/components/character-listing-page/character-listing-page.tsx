import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import { useFilteredCharacters } from '../../hooks/character';

interface Props {}

export default function CharacterListingPage(props: Props) {
  const { characters } = useContext(ResourcesContext);
  const [nameFilter, setNameFilter] = useState('');
  const filteredCharacters = useFilteredCharacters(characters, nameFilter);

  return (
    <div className="character-listing-page">
      <h2>Characters</h2>
      <input
        placeholder="Filter Name..."
        onChange={event => setNameFilter(event.target.value)}
      />
      <ul>
        {filteredCharacters.map(character => (
          <li key={`character-${character.id}`}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
