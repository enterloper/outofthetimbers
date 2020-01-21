import React, { useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import colors from 'styles/colors';

const { mustard } = colors;
const StyledButton = styled.button`
    background: none;
    border: 0;
    box-sizing: border-box;
    margin: 16px;
    padding: 16px 32px;
    box-shadow: inset 0 0 0 2px red;
    color: red;
    font-weight: 700;
    position: relative;
    vertical-align: middle;
    
    transition: color 0.25s;
    &::before,
    &::after {
        border: 2px solid transparent;
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
    }

    &::before {
        top: 0;
        left: 0;
    }
   
    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover {
      color: rebeccapurple;
    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    &:hover::before {
      border-top-color: rebeccapurple; // Make borders visible
      border-right-color: rebeccapurple;
      transition:
        width 0.25s ease-out, // Width expands first
        height 0.25s ease-out 0.25s; // And then height
    }

  &:hover::after {
    border-bottom-color: rebeccapurple; // Make borders visible
    border-left-color: rebeccapurple;
    transition:
      border-color 0s ease-out 0.5s, // Wait for ::before to finish before showing border
      width 0.25s ease-out 0.5s, // And then exanding width
      height 0.25s ease-out, // And finally height
  }
  &::after {
    top: 0;
    left: 0;
  }
  &:hover::after {
    border-bottom-color: $yellow;
    border-left-color: $yellow;
    transition: // Animate height first, then width
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s;
  }
}

`;

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

Button.propTypes = {
  onClick: func.isRequired,
};

export default Button;
