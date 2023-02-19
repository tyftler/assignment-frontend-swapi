import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './app';

it('renders App', () => {
  render(<App />);

  const headingElement = screen.getByText('SWAPI');
  expect(headingElement).toBeInTheDocument();
});
