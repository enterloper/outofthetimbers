import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  fontSize: PropTypes.string, // small = 24px, medium = 32, default = 40px, large = 56px
};

const defaultProps = {
  fontSize: null,
};

const Title = ({ fontSize }) => {
  return (
    <span
      className={`title ${fontSize ? `title-${fontSize}` : 'title-default'}`}
    >
      Out of the Timbers
    </span>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
