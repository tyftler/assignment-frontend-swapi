import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/700.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { theme } from './layout-theme';
import './layout.css';

interface Props {}

export default function Layout({ children }: PropsWithChildren<Props>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout">
        <header className="layout-header container">
          <h1>SWAPI</h1>

          <IconButton
            href="https://github.com/tyftler/assignment-frontend-swapi"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </header>

        {children}
      </div>
    </ThemeProvider>
  );
}
