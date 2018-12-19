import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const IconButton = ({ description, image }) => {
  return (
    <button
      className="icon-button"
      type="button"
    >
      <img
        src={image}
        alt={description}
      />
    </button>
  );
};

IconButton.propTypes = propTypes;
export default IconButton;
