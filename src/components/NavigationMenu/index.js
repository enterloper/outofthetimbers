import React, { useState } from 'react';
import { Link, Location } from '@reach/router';
import styled from 'styled-components';
import colors from 'styles/colors';
import useScrollPosition from 'utility/scrollPositionHook';

const { alabaster, mustard, smokeyBlack } = colors;
const Header = styled.header`
  width: 100%;
  min-width: 320px;
  position: fixed;
  top: 0;
  height: 80px;
  z-index: 10;
  background: ${mustard};
  box-shadow: 0 0 5px 0 rbga(0, 0, 0, 0.15);
  text-transform: uppercase;
  transition: background 300ms ease-in-out;
  &.isTransparent {
    background: none;
  }
  &.
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  max-width: none;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${smokeyBlack};
    transition: color 500ms ease-in-out;
  }

  &.isTransparent {
    > a {
      color: ${alabaster}
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  height: 100%;
  
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    color: ${smokeyBlack};
    height: 100%;
    transition: color 500ms ease-in-out;
  }
  &.isTransparent {
    > a {
      color: ${alabaster}
    }
  }
`;

const NavigationMenu = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const shouldBeSeen = currPos.y > -100;

      if (shouldBeSeen !== isTransparent) setIsTransparent(shouldBeSeen);
    },
    [isTransparent],
  );
  const colorMap = {
    '/store': {
      colorScheme: 'store',
      fontColor: smokeyBlack,
      background: 'rebeccapurple',
    },
    '/about': {
      colorScheme: 'about',
      fontColor: smokeyBlack,
      background: 'rebeccapurple',
    },
    '/contact': {
      colorScheme: 'contact',
      fontColor: smokeyBlack,
      background: 'rebeccapurple',
    },
  };

  return (
    <Location>
      {({ location: { pathname } }) => {
        let className = '';
        if (colorMap[pathname]) {
          className = colorMap[pathname].colorScheme;
        }
        console.log('CLASS:', className);
        return (
          <Header className={`${isTransparent ? 'isTransparent' : ''} ${className}`}>
            <Container>
              <Logo className={isTransparent ? 'isTransparent' : ''}>
                <Link to="/">
                  OUT OF THE TIMBERS
                </Link>
              </Logo>
              <Navigation className={isTransparent ? 'isTransparent' : ''}>
                <Link to="store">Store</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
              </Navigation>
            </Container>
          </Header>
        );
      }}
    </Location>
  );
};

export default NavigationMenu;
