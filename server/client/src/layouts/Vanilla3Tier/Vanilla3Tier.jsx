import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Vanilla3Tier = ({ children }) => (
  <div className="three-tier">
    <Header />
    { children }
    <Footer />
  </div>
);

export default Vanilla3Tier;
