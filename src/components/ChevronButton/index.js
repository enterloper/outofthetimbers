import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const { alabaster } = colors;
const showFade = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;
const ChevronContainer = styled.a`
    position: absolute;
    padding-top: 80px;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-decoration: none;
    transition: opacity .3s;
    & span:nth-of-type(1) {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }

    & span:nth-of-type(2) {
      top: 16px;
      -webkit-animation-delay: .15s;
      animation-delay: .15s;
    }

    & span:nth-of-type(3) {
      top: 32px;
      -webkit-animation-delay: .3s;
      animation-delay: .3s;
    }
`;

const Chevron = styled.span`
    top: 0;
    left: 50%;
    width: 32px;
    height: 32px;
    margin-left: -12px;
    border-left: 3px solid ${alabaster};
    border-bottom: 3px solid ${alabaster};
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: ${showFade} 2s infinite;
    animation: ${showFade} 2s infinite;
    opacity: 0;
    box-sizing: border-box;
`;


const ChevronButton = () => (
  <ChevronContainer>
    <Chevron />
    <Chevron />
    <Chevron />
  </ChevronContainer>
);

export default ChevronButton;
