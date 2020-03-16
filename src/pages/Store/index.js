import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 24px;
`;

const ProductsTitle = styled.h1`
  width: 100%;
  margin-top: 140px;
  font-size: 40px;
  font-family: 'Burford', 'Abril Fatface', sans-serif;
`;

const ProductsGallery = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
`;

const ProductWrapper = styled.div`
  background: rebeccapurple;
`;

const StorePage = () => (
  <Wrapper>
    <ProductsTitle>Our Product Gallery</ProductsTitle>
    <ProductsGallery>
      <ProductWrapper>
        some words here;
      </ProductWrapper>
    </ProductsGallery>
  </Wrapper>
);

export default StorePage;
