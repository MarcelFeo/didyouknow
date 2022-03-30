import React from 'react';
// routes
import Router from './router/routes';
// styles
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Router />

      <GlobalStyle />
    </>
  );
}

export default App;
