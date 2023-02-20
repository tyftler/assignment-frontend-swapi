import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './components/app/app';
import CharacterDetailPage from './components/character-detail-page/character-detail-page';
import CharacterListingPage from './components/character-listing-page/character-listing-page';
import ErrorPage from './components/error-page/error-page';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <App outlet={<ErrorPage />} />,
    children: [
      {
        path: '/characters',
        element: <CharacterListingPage />
      },
      {
        path: '/characters/:characterId',
        element: <CharacterDetailPage />
      },
      // redirect to character listing page since this is the only content, usually there would be a landing page
      { index: true, element: <Navigate to="/characters" replace /> }
    ]
  }
]);
