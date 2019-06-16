import React from 'react';
import './styles.scss';
import Footer from '../../components/Footer';

const Vanilla3Tier = ({ children }) => (
  <div className="three-tier">
    { children }
    <Footer />
  </div>
);

export default Vanilla3Tier;
