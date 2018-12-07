import React from 'react';
import { FooterLeft, FooterCenter, FooterRight } from './Sections';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <FooterLeft />
    <FooterCenter />
    <FooterRight />
  </div>
);

export default Footer;
