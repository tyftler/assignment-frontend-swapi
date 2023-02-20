import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './layout';

it('renders Layout', () => {
  render(<Layout />);

  const headingElement = screen.getByText('SWAPI');
  expect(headingElement).toBeInTheDocument();
});
