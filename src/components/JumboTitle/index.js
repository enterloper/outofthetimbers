import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import ChevronButton from 'components/ChevronButton';

const { alabaster } = colors;
const JumboImage = styled.div`
    background: url('https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/home_banner.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100%;
    height: 100vh;
    width: 100vw;
    > h1 {
      margin: 0;
    }
`;

const FadeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100% - 80px);
    background: rgba(0, 0, 0, .3);
    padding-top: 80px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    margin-top: 15rem;
    text-align: center;
    border-top: 3px solid ${alabaster};
    border-left: 3px solid ${alabaster};
    border-right: 3px solid ${alabaster};
    border-radius: 3px;

    h1 {
      margin: .8rem 0 3.2rem;
      font-size: 12rem;
      font-weight: 400;
      color: ${alabaster};
      font-family: 'Burford', 'Abril Fatface', sans-serif;
      line-height: 1;
    }
`;

const TitleBorderPlacement = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleSideBorder = styled.div`
    border-bottom: 3px solid ${alabaster};
    width: 8rem;
`;

const TitleDrop = styled.div`
  margin-top: -6rem;
  h1 {
      margin: 0;
      font-size: 12rem;
      font-weight: 400;
      color: ${alabaster};
      font-family: 'Burford', 'Abril Fatface', sans-serif;
      line-height: 1;
  }
`;

const JumboTitle = () => (
  <JumboImage>
    <FadeContainer>
      <Title>
        <TitleWrapper>
          <h1>Out of the</h1>
          <TitleBorderPlacement>
            <TitleSideBorder />
            <TitleSideBorder />
          </TitleBorderPlacement>
        </TitleWrapper>
        <TitleDrop>
          <h1>Timbers</h1>
        </TitleDrop>
      </Title>
      <ChevronButton />
    </FadeContainer>
  </JumboImage>
);

export default JumboTitle;
