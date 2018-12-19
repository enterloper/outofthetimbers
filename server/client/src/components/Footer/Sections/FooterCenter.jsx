import React from 'react';
import PropTypes from 'prop-types';
import SubscribeBlock from '../../common/SubscribeBlock';
import IconButton from '../../common/IconButton';
import twitterIcon from '../../../../assets/twitter.svg';
import pinterestIcon from '../../../../assets/pinterest.svg';
import instagramIcon from '../../../../assets/instagram.png';

const iconConfig = [
  {
    icon: pinterestIcon,
    description: 'Pinterest icon linking to the Out of the Timbers Pinterest account',
  },
  {
    icon: twitterIcon,
    description: 'Twitter icon linking to the Out of the Timbers Twitter account',
  },
  {
    icon: instagramIcon,
    description: 'Instagram icon linking to the Out of the Timbers Instagram account',
  },
];

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
const renderIconsList = config => config.map(({ icon, description }) => (
  <IconButton key={description} image={icon} description={description} />
));

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
      {renderIconsList(iconConfig)}
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
