import React, { useState } from 'react';
import {
  arrayOf,
  func,
  node,
  oneOfType,
  string
} from 'prop-types';
import styled from 'styled-components';
import colors from 'styles/colors';

const { mustard } = colors;

const StyledButton = styled.button`
    background: none;
    border: 0;
    box-sizing: border-box;
    margin: 16px;
    padding: 16px 32px;
    color: ${({ color }) => (color || mustard)};
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
      color: ${({ color }) => color};
    font-weight: 700;
    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    &:hover::before {
      border-top-color: ${({ color }) => color};
    font-weight: 700; // Make borders visible
      border-right-color: ${({ color }) => color};
    font-weight: 700;
      transition:
        width 0.25s ease-out, // Width expands first
        height 0.25s ease-out 0.25s; // And then height
    }

  &:hover::after {
    border-bottom-color: ${({ color }) => (color || mustard)};
    font-weight: 700; // Make borders visible
    border-left-color: ${({ color }) => (color || mustard)};
    font-weight: 700;
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

const Button = ({ children, color, onClick }) => (
  <StyledButton color={color} onClick={onClick}>{children}</StyledButton>
);

Button.propTypes = {
  children: oneOfType([string, arrayOf(node)]).isRequired,
  color: string,
  onClick: func.isRequired,
};

Button.defaultProps = {
  color: mustard,
};

export default Button;
