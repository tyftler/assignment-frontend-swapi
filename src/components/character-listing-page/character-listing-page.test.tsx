import { render, screen } from '@testing-library/react';
import React from 'react';
import { initialResources, ResourcesContext } from '../../contexts/resource';
import CharacterListingPage from './character-listing-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => {}
}));

it('renders CharacterListingPage', () => {
  render(
    <ResourcesContext.Provider value={initialResources}>
      <CharacterListingPage />
    </ResourcesContext.Provider>
  );

  const headingElement = screen.getByText('Characters');
  expect(headingElement).toBeInTheDocument();
});
