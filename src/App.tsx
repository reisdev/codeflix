import React from 'react';

import Menu from "./components/Menu"
import { GlobalStyle } from './style';
import Router from './router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
