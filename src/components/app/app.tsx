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
import React, { PropsWithChildren } from 'react';
import { ResourcesContext } from '../../contexts/resource';
import { useResources } from '../../hooks/resource';
import { theme } from './app-theme';
import './app.css';

interface Props {}

export default function App({ children }: PropsWithChildren<Props>) {
  const [resources, isLoaded] = useResources();

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

          {isLoaded ? children : AppLoading}
        </div>
      </ResourcesContext.Provider>
    </ThemeProvider>
  );
}
