import React from 'react';
import Title from '../../common/Title';

const LineSection = () => (
  <div className="footer-wrapper-section">
    <div className="footer-title-line" />
  </div>
);

const FooterTitle = () => (
  <div className="footer-title">
    <LineSection />
    <div className="footer-wrapper-section">
      <Title fontSize="medium" />
    </div>
    <LineSection />
  </div>
);

export default FooterTitle;
