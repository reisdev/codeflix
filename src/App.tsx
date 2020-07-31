import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Routes';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
