import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Routes';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Menu />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
