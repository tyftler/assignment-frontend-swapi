import { useParams } from 'react-router-dom';
import { characters } from '../../types';
import ErrorPage from '../error-page/error-page';

interface Props {}

export default function CharacterDetailPage(props: Props) {
  const { characterId } = useParams();

  const character = characters[Number(characterId)];

  if (!character) {
    return <ErrorPage error={new Error('404 Not Found')} />;
  }

  return (
    <div className="character-detail-page">
      <h2>Character {character}</h2>
    </div>
  );
}
