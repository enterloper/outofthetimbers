import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import colors from 'styles/colors';
import NavigationMenu from 'components/NavigationMenu';
import JumboTitle from 'components/JumboTitle';
import Button from 'components/Button';

const {mustard} = colors;

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

const FeaturedWork = styled.section`
  flex: 0 0 100%;
  width: calc(100% - 32px);
  margin: 0 40px 80px;
  p {
    width: 100%;
    text-align: center;
  }
`;

const FeaturedTitle = styled.h5`
    width: 100%;
    margin: 0 auto 32px;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    max-width: 1050px;
    &::before {
      text-align: right;
      position: absolute;
      overflow: hidden;
      top: 51%;
      width: 50%;
      height: 1px;
      content: '';
      background-color: #CCCCCC;
      margin-left: -53%;
    }
    &::after {
      position: absolute;
      top: 51%;
      overflow: hidden;
      width: 50%;
      height: 1px;
      content: '';
      background-color: #CCCCCC;
      margin-left: 2%;
    }
`;

const FeaturedGallery = styled.div`
  display: flex;
  margin: 0 auto 24px;
  width: 100%;
  max-width: 900px;
`;

const FeaturedGalleryPrimary = styled.div`
  width: 50%;
  margin: 12px 24px 12px 0;

  img {
    object-fit: contain;
    width: 100%;
    max-height: 600px;
    border-radius: 2px;
  }
`;

const FeaturedGallerySecondary = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    object-fit: contain;
    max-height: 300px;
    &:first-of-type {
      margin-bottom: 24px;
    }
  }
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
          <Button>
            LEARN MORE
          </Button>
        </SummaryContainer>
      </Summary>
      <FeaturedWork>
        <FeaturedTitle>FEATURED WORK</FeaturedTitle>
        <FeaturedGallery>
          <FeaturedGalleryPrimary>
            <img src="assets/images/featured-primary.jpg" alt="A sample collection of featured peices" />
          </FeaturedGalleryPrimary>
          <FeaturedGallerySecondary>
            <img src="assets/images/featured-secondary-top.jpg" alt="Maple bowl with turquoise inlay" />
            <img src="assets/images/featured-secondary-bottom.jpg" alt="Maple bowl with turquoise inlay" />
          </FeaturedGallerySecondary>
        </FeaturedGallery>
        <Button className='draw'>
          SEE ALL WORK
        </Button>
      </FeaturedWork>
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
