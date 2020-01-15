import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: red;
  > h1 {
    margin: 0;
  }
`;
const HomePage = () => (
  <Wrapper>
    <h1>Home</h1>
    <Link to="about">About</Link>
    <Link to="store">store</Link>
  </Wrapper>
);

export default HomePage;
