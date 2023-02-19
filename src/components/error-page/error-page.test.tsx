import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from './error-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => {}
}));

it('renders ErrorPage', () => {
  jest.spyOn(console, 'error').mockImplementation();

  render(<ErrorPage />);

  const headingElement = screen.getByText('Error');
  expect(headingElement).toBeInTheDocument();
});
