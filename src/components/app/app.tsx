import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/700.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Card,
  CardContent,
  CircularProgress,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Typography
} from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import { useResources } from '../../hooks/resource';
import ErrorPage from '../error-page/error-page';
import { theme } from './app-theme';
import './app.css';

interface Props {
  outlet?: any;
}

export default function App(props: Props) {
  const [resources, isLoaded, loadingError] = useResources();

  const AppHeader = (
    <header className="app-header container">
      <h1>SWAPI</h1>

      <IconButton
        href="https://github.com/tyftler/assignment-frontend-swapi"
        target="_blank"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </header>
  );

  const AppLoading = (
    <div className="app-loading container">
      <Card>
        <CardContent>
          <Typography color="primary">
            May the SWAPI&apos;s response time be with you...
          </Typography>

          <CircularProgress color="secondary" />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResourcesContext.Provider value={resources}>
        <div className="app">
          {AppHeader}

          {!isLoaded && AppLoading}

          {isLoaded &&
            (loadingError ? (
              <ErrorPage error={loadingError} />
            ) : props.outlet ? (
              props.outlet
            ) : (
              <Outlet />
            ))}
        </div>
      </ResourcesContext.Provider>
    </ThemeProvider>
  );
}
