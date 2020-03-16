import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import './styles/normalize.css';
import './styles/app-global.css';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import StorePage from './pages/Store';
import AboutPage from './pages/About';
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';

const App = () => (
  <>
    <NavigationMenu />
    <Router>
      <HomePage path="/" />
      <StorePage path="store" />
      <AboutPage path="about" />
      <ContactPage path="contact" />
    </Router>
    <Footer />
  </>
);
render(<App />, document.getElementById('app'));
