import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';

interface Props {}

export default function CharacterListingPage(props: Props) {
  const resources = useContext(ResourcesContext);

  return (
    <div className="character-listing-page">
      <h2>Characters</h2>
      <ul>
        {resources.characters.map(character => (
          <li key={`character-${character.id}`}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
