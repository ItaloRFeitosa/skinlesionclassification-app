import React from 'react';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
