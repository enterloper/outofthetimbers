import React from 'react';
import {
  FooterTitle,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from './Sections';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <FooterTitle />
    <div className="footer-wrapper">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  </div>
);

export default Footer;
