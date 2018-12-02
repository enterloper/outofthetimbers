import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigationConfig = [
      {
        title: 'Home',
        route: '/',
      },
      {
        title: 'Store',
        route: '/store/',
      },
      {
        title: 'About',
        route: '/about/',
      },
    ];

    this.renderNavigation = this.renderNavigation.bind(this);
  }

  renderNavigation() {
    const navArray = this.navigationConfig; // should filter here for Admin access.
    return (
      <ul>
        {navArray.map(({title, route}) => (
          <li>
            <Link
              key={title}
              to={route}
              className="header-nav-item"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          {this.renderNavigation()}
        </nav>
      </header>
    );
  }
}

export default Header;