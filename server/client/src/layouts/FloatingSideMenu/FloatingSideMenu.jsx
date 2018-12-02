import React from 'react';
import './styles.scss';

const FloatingSideMenu = ({ children }) => {
  return (
    <div className="side-menu-wrapper">
      { children }
    </div>
  );
};

export default FloatingSideMenu;