import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import colors from 'styles/colors';

const { smokeyBlack } = colors;
const StyledFeaturedWork = styled.section`
  display: flex;
  flex-direction: column;
  
  align-items: center;
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
    color: ${smokeyBlack};
    &::before {
      text-align: right;
      position: absolute;
      overflow: hidden;
      top: 51%;
      width: 50%;
      height: 1px;
      content: '';
      background-color: ${smokeyBlack};
      margin-left: -53%;
    }
    &::after {
      position: absolute;
      top: 51%;
      overflow: hidden;
      width: 50%;
      height: 1px;
      content: '';
      background-color:  ${smokeyBlack};
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

const FeaturedWork = () => (
  <StyledFeaturedWork>
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
    <Button color={smokeyBlack}>
      SEE ALL WORK
    </Button>
  </StyledFeaturedWork>
);

export default FeaturedWork;
