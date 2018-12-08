import React from 'react';
import PropTypes from 'prop-types';
import SubscribeBlock from '../../common/SubscribeBlock/SubscribeBlock';

const copyrightConfig = [
  {
    name: 'copyright',
    text: '2017 | Weeknight Dangerous',
  },
  {
    name: 'rightsReserved',
    text: 'All Rights Reserved',
  },
  {
    name: 'link',
    text: 'www.weeknightdangero.us',
  },
];

const renderCopyRightItem = ({ name, text }) => (
  <li key={name}>
    {name === 'link'
      ? (<a href="https://weeknightdangero.us" target="_blank" rel="noopener noreferrer">{text}</a>)
      : (<span>{text}</span>)
    }
  </li>
);

renderCopyRightItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const renderCopyrightList = config => <ul>{config.map(renderCopyRightItem)}</ul>;

const FooterCenter = () => (
  <div className="footer-wrapper-section footer-center">
    <div className="footer-center-social">
      <span>i</span>
      <span>o</span>
      <span>u</span>
    </div>
    <div className="footer-center-subscribe">
      <SubscribeBlock />
    </div>
    <div className="footer-center-copyright">
      {renderCopyrightList(copyrightConfig)}
    </div>
  </div>
);

export default FooterCenter;
