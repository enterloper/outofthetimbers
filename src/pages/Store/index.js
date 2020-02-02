import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StorePage = () => (
  <Wrapper>
    This is the Store Page.
  </Wrapper>
);

export default StorePage;
