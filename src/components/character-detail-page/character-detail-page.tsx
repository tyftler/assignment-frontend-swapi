import { Button, Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import ErrorPage from '../error-page/error-page';
import Header from '../shared/header/header';
import './character-detail-page.css';

interface Props {}

export default function CharacterDetailPage(props: Props) {
  const { characters } = useContext(ResourcesContext);
  const { characterId } = useParams();

  const character = characters.find(character => character.id === characterId);

  if (!character) {
    return <ErrorPage error={new Error('404 Not Found')} />;
  }

  const renderList = (items: string[], placeholder: string) => {
    if (items.length <= 1) {
      return items[0] ?? placeholder;
    }

    return (
      <ul>
        {items.map(item => (
          <li key={`item-${item}`}>
            <Typography color="text.secondary">{item}</Typography>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="character-detail-page">
      <Header>
        <h2>{character.name}</h2>

        <Button
          component={Link}
          to="/characters"
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
      </Header>

      <div className="container">
        <Card className="card">
          <CardContent>
            <h3>Species</h3>

            {renderList(character.species, 'Unknown')}
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <h3>Films</h3>

            {renderList(character.films, 'None')}
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <h3>Starships</h3>

            {renderList(character.starships, 'None')}
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <h3>Birth Year</h3>

            <Typography color="text.secondary">
              {character.birth_year}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
