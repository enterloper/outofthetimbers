import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import './styles/normalize.css';
import './styles/app-global.css';
import HomePage from './pages/Home';
import StorePage from './pages/Store';
import AboutPage from './pages/About';

const App = () => (
  <Router>
    <HomePage path="/" />
    <StorePage path="store" />
    <AboutPage path="about" />
  </Router>
);
render(<App />, document.getElementById('app'));
