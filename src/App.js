import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
