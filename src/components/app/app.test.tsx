import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './app';

test('renders app', () => {
  render(<App />);
  const headingElement = screen.getByText(/SWAPI/i);
  expect(headingElement).toBeInTheDocument();
});
