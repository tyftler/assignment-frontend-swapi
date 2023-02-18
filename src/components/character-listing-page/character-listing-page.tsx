import React from 'react';
import { Link } from 'react-router-dom';
import { characters } from '../../types/characters';

interface Props {}

export default function CharacterListingPage(props: Props) {
  return (
    <div className="character-listing-page">
      <h2>Characters</h2>
      <ul>
        {characters.map((character, characterIndex) => (
          <li key={`character-${character}`}>
            <Link to={`/characters/${characterIndex}`}>{character}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
