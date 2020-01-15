import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  min-width: 320px;
  position: fixed;
  top: 0;
  height: 80px;
  z-index: 10;
  background: red;
  box-shadow: 0 0 5px 0 rbga(0, 0, 0, 0.15);
  text-transform: uppercase;
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
  background: peru;
  font-size: 24px;
  a {
    text-decoration: none;
    transition: color 100ms cubic-bezier(0.2, 0.3, 0.25, 0.9) 0ms;
    cursor: pointer;
    color: yellow;

    &:hover {
      color: black;
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
    color: rebeccapurple;
    height: 100%;
    background: black;
  }
`;

const NavigationMenu = () => (
  <Header>
    <Container>
      <Logo>
        <Link to="/">
          OUT OF THE TIMBERS
        </Link>
      </Logo>
      <Navigation>
        <Link to="store">Store</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </Navigation>
    </Container>
  </Header>
);

export default NavigationMenu;
