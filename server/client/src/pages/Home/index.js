import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import colors from 'styles/colors';
import NavigationMenu from 'components/NavigationMenu';
import JumboTitle from 'components/JumboTitle';
import FeaturedWork from 'components/FeaturedWork';
import Button from 'components/Button';

const { mustard, smokeyBlack } = colors;

const Container = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: center;
    min-height: 100%;
`;

const Summary = styled.section`
  padding: 72px 0 36px;
  width: 100%;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  h3, h4 {
    color: ${smokeyBlack};
  }
`;

const SummaryTitle = styled.h3`
  font-size:  40px;
  text-align: center;
  margin-bottom: 24px;
`;

const SummaryDescription = styled.h4`
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
`;

const ContactContainer = styled.section`
  background: #313e48 url('assets/images/forest-reflection.jpg') no-repeat top;
  color: white;
  width: 100%;
`;

const ContactOverlay = styled.div`
  padding: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .7); 
`;

const ContactContent = styled.div`
  font-size: 32px;
  max-width: 60%;
  text-align: center;
  margin-bottom: 32px;

`;

const Established = styled.div`
  background-color: transparent;
  color: ${mustard};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid ${mustard};
  margin-bottom: 32px;
  p:first-of-type {
    padding: 0 8px 4px;
    border-bottom: 1px solid ${mustard};
  }
  p: last-of-type {
    padding: 4px 8px 0;
  }
`;

const HomePage = () => (
  <>
    <NavigationMenu />
    <Container>
      <JumboTitle />
      <Summary>
        <SummaryContainer>
          <SummaryTitle>
            Out of the Timbers creates one of a kind hand crafted works
          </SummaryTitle>
          <SummaryDescription>
            The care and attention to detail put into each produced peice, is a result of the respect for the individual and unique nature each tree provides.
          </SummaryDescription>
          <Button color={smokeyBlack}>
            LEARN MORE
          </Button>
        </SummaryContainer>
      </Summary>
      <FeaturedWork />
      <ContactContainer>
        <ContactOverlay>
          <Established>
            <p>EST.</p>
            <p>2017</p>
          </Established>
          <ContactContent>
            <p>HERE IS SOME RANDOM BULLSHIT THAT MY DAD WILL TELL ME TO PUT.</p>
          </ContactContent>
          <Button>
            GET IN TOUCH
          </Button>
        </ContactOverlay>
      </ContactContainer>
    </Container>
  </>
);

export default HomePage;
