import React from 'react';
import { Link } from 'react-router-dom';

const FooterLeft = () => (
  <div className="footer-wrapper-section footer-left">
    <nav>
      <ul>
        <li>
          <Link to="about">
            About
          </Link>
        </li>
        <li>
          <Link to="admin">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default FooterLeft;
