import React, { PropsWithChildren } from 'react';
import { ResourcesContext } from '../../contexts/resource';
import { useResources } from '../../hooks/resource';

interface Props {}

export default function App({ children }: PropsWithChildren<Props>) {
  const [resources, isLoaded] = useResources();

  return (
    <div className="app">
      <header>
        <h1>SWAPI</h1>
      </header>
      {isLoaded ? (
        <ResourcesContext.Provider value={resources}>
          {children}
        </ResourcesContext.Provider>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
