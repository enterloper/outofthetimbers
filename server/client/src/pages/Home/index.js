import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import NavigationMenu from 'components/NavigationMenu';
import JumboTitle from 'components/JumboTitle';
import FeaturedWork from 'components/FeaturedWork';
import Contact from 'components/Contact';
import Summary from 'components/Summary';

const Container = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: center;
    min-height: 100%;
`;

const HomePage = () => (
  <>
    <NavigationMenu />
    <Container>
      <JumboTitle />
      <Summary />
      <FeaturedWork />
      <Contact />
    </Container>
  </>
);

export default HomePage;
