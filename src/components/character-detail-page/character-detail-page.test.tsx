import { render, screen } from '@testing-library/react';
import React from 'react';
import { initialResources, ResourcesContext } from '../../contexts/resource';
import { Character, Resources } from '../../types';
import CharacterDetailPage from './character-detail-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ characterId: '1' }),
  Link: () => {}
}));
jest.mock('../error-page/error-page');

it('renders CharacterDetailPage', () => {
  const resources: Resources = {
    ...initialResources,
    characters: [
      {
        id: '1',
        name: 'mock_name',
        species: ['mock_species'],
        films: ['mock_film'],
        starships: ['mock_starship']
      } as Character
    ]
  };

  render(
    <ResourcesContext.Provider value={resources}>
      <CharacterDetailPage />
    </ResourcesContext.Provider>
  );

  const headingElement = screen.getByText('mock_name');
  expect(headingElement).toBeInTheDocument();
});
