import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/700.css';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import { useResources } from '../../hooks/resource';
import ErrorPage from '../error-page/error-page';
import Layout from '../shared/layout/layout';
import './app.css';

interface Props {}

export default function App(props: Props) {
  const [resources, isLoaded, loadingError] = useResources();

  return (
    <ResourcesContext.Provider value={resources}>
      <Layout>
        <div className="app">
          {!isLoaded && (
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
          )}

          {isLoaded &&
            (loadingError ? <ErrorPage error={loadingError} /> : <Outlet />)}
        </div>
      </Layout>
    </ResourcesContext.Provider>
  );
}
