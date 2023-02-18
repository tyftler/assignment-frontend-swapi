import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import ErrorPage from '../error-page/error-page';

interface Props {}

export default function CharacterDetailPage(props: Props) {
  const { characters } = useContext(ResourcesContext);
  const { characterId } = useParams();

  const character = characters.find(character => character.id === characterId);

  if (!character) {
    return <ErrorPage error={new Error('404 Not Found')} />;
  }

  return (
    <div className="character-detail-page">
      <h2>{character.name}</h2>
      <p>
        Species:{' '}
        {character.species.length ? character.species.join(', ') : 'Unknown'}
      </p>
      <p>
        Films: {character.films.length ? character.films.join(', ') : 'None'}
      </p>
      <p>
        Starships:{' '}
        {character.starships.length ? character.starships.join(', ') : 'None'}
      </p>
      <Link to={'/characters'}>Back</Link>
    </div>
  );
}
