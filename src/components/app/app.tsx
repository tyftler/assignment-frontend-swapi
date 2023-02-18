import React, { PropsWithChildren } from 'react';

interface Props {}

export default function App(props: PropsWithChildren<Props>) {
  return (
    <div className="app">
      <header>
        <h1>SWAPI</h1>
      </header>
      {props.children}
    </div>
  );
}
